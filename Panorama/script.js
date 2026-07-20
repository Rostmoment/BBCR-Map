function getMediaUrlFromParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const mediaUrl = urlParams.get('url') || urlParams.get('src') || window.PANORAMA_SRC || null;
    return {
        url: mediaUrl
    };
}

document.addEventListener('DOMContentLoaded', () => {
    /* ------------------ DOM references ------------------ */
    const elements = {
        noPanoramaMessage: document.getElementById('noPanoramaMessage'),
        aframeContainer: document.getElementById('aframeContainer'),
        controls: document.getElementById('controls'),
        videoControls: document.getElementById('videoControls'),
        playPauseButton: document.getElementById('playPauseButton'),
        videoSlider: document.getElementById('videoSlider'),
        loadingIndicator: document.getElementById('loadingIndicator'),
        zoomInfo: document.getElementById('zoomInfo'),
        screenshotButton: document.getElementById('screenshotButton'),
        screenshotFlash: document.getElementById('screenshotFlash'),
        screenshotFeedback: document.getElementById('screenshotFeedback'),
        container: document.getElementById('container')
    };

    /* ------------------ App state ------------------ */
    const state = {
        scene: null,
        videoElement: null,
        isPlaying: true,
        currentFov: 80,
        currentMedia: null,
        isMediaImage: false
    };

    /* ------------------ Helpers ------------------ */
    const helpers = {
        showLoading: (flag) => {
            elements.loadingIndicator.style.display = flag ? 'flex' : 'none';
        },

        updateFov: (delta) => {
            state.currentFov = Math.min(179, Math.max(1, state.currentFov + delta));
            const cam = document.querySelector('#mainCamera');
            if (cam) cam.setAttribute('camera', 'fov', state.currentFov);
            elements.zoomInfo.textContent = `Zoom: ${Math.round(state.currentFov)}°`;
            elements.zoomInfo.style.background = 'rgba(66,133,244,0.7)';
            setTimeout(() => elements.zoomInfo.style.background = 'rgba(0,0,0,0.55)', 300);
        },

        updatePlayPauseIcon: () => {
            elements.playPauseButton.innerHTML = state.isPlaying ?
                '<span class="material-symbols-outlined">pause</span>' :
                '<span class="material-symbols-outlined">play_arrow</span>';
        },

        preventDefaults: (e) => {
            e.preventDefault();
            e.stopPropagation();
        },

        updateSlider: () => {
            if (!state.videoElement || !state.videoElement.duration) return;
            const val = (state.videoElement.currentTime / state.videoElement.duration) * 100;
            elements.videoSlider.value = val;
        },

        dist: (t) => {
            return Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
        }
    };

    /* ------------------ Media handling ------------------ */
    const mediaHandlers = {
        createImagePanorama: (src) => {
            helpers.showLoading(true);

            interfaceHandlers.cleanupScene();

            state.scene = document.createElement('a-scene');
            state.scene.setAttribute('embedded', '');
            state.scene.setAttribute('xr-mode-ui', 'enabled: true');

            const sky = document.createElement('a-sky');
            sky.setAttribute('src', src);
            sky.setAttribute('material', 'npot: true');
            sky.setAttribute('rotation', '0 -90 0');
            sky.setAttribute('geometry', 'segmentsHeight: 64; segmentsWidth: 128');

            const camera = document.createElement('a-entity');
            camera.setAttribute('camera', 'fov: 80');
            camera.setAttribute('look-controls', 'reverseMouseDrag: true');
            camera.setAttribute('wasd-controls', 'enabled: false');
            camera.setAttribute('position', '0 1.6 0');
            camera.setAttribute('id', 'mainCamera');

            state.scene.appendChild(sky);
            state.scene.appendChild(camera);
            elements.aframeContainer.appendChild(state.scene);

            sky.addEventListener('loaded', () => helpers.showLoading(false));
            sky.addEventListener('error', () => {
                helpers.showLoading(false);
                alert('Error loading panorama image.');
            });

            elements.noPanoramaMessage.classList.remove('visible');
            elements.controls.style.display = 'flex';
            elements.zoomInfo.style.display = 'block';
            elements.screenshotButton.style.display = 'block';
        },

        createVideoPanorama: (src) => {
            interfaceHandlers.cleanupScene();

            state.scene = document.createElement('a-scene');
            state.scene.setAttribute('embedded', '');
            state.scene.setAttribute('xr-mode-ui', 'enabled: true');

            // Assets
            const assets = document.createElement('a-assets');
            state.scene.appendChild(assets);

            state.videoElement = document.createElement('video');
            state.videoElement.setAttribute('id', 'videoAsset');
            state.videoElement.setAttribute('src', src);
            state.videoElement.setAttribute('crossorigin', 'anonymous');
            state.videoElement.setAttribute('playsinline', '');
            state.videoElement.setAttribute('webkit-playsinline', '');
            state.videoElement.setAttribute('preload', 'metadata');
            state.videoElement.setAttribute('loop', '');
            assets.appendChild(state.videoElement);

            // Videosphere
            const vidsphere = document.createElement('a-videosphere');
            vidsphere.setAttribute('src', '#videoAsset');
            vidsphere.setAttribute('rotation', '0 -90 0');
            state.scene.appendChild(vidsphere);

            // Camera
            const camera = document.createElement('a-entity');
            camera.setAttribute('camera', 'fov: 80');
            camera.setAttribute('look-controls', 'reverseMouseDrag: true');
            camera.setAttribute('wasd-controls', 'enabled: false');
            camera.setAttribute('position', '0 1.6 0');
            camera.setAttribute('id', 'mainCamera');
            state.scene.appendChild(camera);

            elements.aframeContainer.appendChild(state.scene);

            // UI state
            elements.noPanoramaMessage.classList.remove('visible');
            elements.controls.style.display = 'flex';
            elements.videoControls.style.display = 'flex';
            elements.zoomInfo.style.display = 'block';
            elements.screenshotButton.style.display = 'block';
            state.isPlaying = true;
            helpers.updatePlayPauseIcon();

            // Event listeners
            state.videoElement.addEventListener('loadedmetadata', () => {
                helpers.showLoading(false);
                elements.videoSlider.value = 0;
                state.videoElement.play().catch(() => { }); // autoplay may require user gesture
            });
            state.videoElement.addEventListener('timeupdate', helpers.updateSlider);
        },

        // Load media from URL if provided
        loadMediaFromUrl: (url) => {
            helpers.showLoading(true);

            // Determine if it's a video based on extension
            const lowerUrl = url.toLowerCase();
            const isVideo = ['.mp4', '.webm'].some(ext => lowerUrl.endsWith(ext));

            if (isVideo) {
                state.currentMedia = url;
                state.isMediaImage = false;
                mediaHandlers.createVideoPanorama(url);
            } else {
                const img = new Image();
                img.crossOrigin = "Anonymous";
                img.onload = () => {
                    state.currentMedia = url;
                    state.isMediaImage = true;
                    mediaHandlers.createImagePanorama(url);
                };
                img.onerror = () => {
                    helpers.showLoading(false);
                    alert('Unsupported media type or inaccessible URL');
                };
                img.src = url;
            }
        }
    };

    /* ------------------ Interface handlers ------------------ */
    const interfaceHandlers = {
        takeScreenshot: () => {
            if (!state.scene) return;

            // Temporarily hide UI elements
            const elementsToHide = [
                elements.zoomInfo,
                elements.controls
            ];

            // Store original display states
            const originalDisplays = elementsToHide.map(el => el.style.display);

            // Hide elements
            elementsToHide.forEach(el => el.style.display = 'none');

            // Let the render update (wait for next frame)
            requestAnimationFrame(() => {
                // Take screenshot of canvas
                const canvas = document.querySelector('canvas');
                if (!canvas) {
                    // Restore UI and return
                    elementsToHide.forEach((el, i) => el.style.display = originalDisplays[i]);
                    return;
                }

                // Create screenshot
                const dataURL = canvas.toDataURL('image/png');

                // Create download link
                const downloadLink = document.createElement('a');
                downloadLink.href = dataURL;
                downloadLink.download = 'panorama-screenshot.png';

                // Trigger download
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);

                // Show flash effect
                elements.screenshotFlash.style.opacity = '0.7';
                setTimeout(() => {
                    elements.screenshotFlash.style.opacity = '0';
                }, 100);

                // Show feedback
                elements.screenshotFeedback.style.opacity = '1';
                setTimeout(() => {
                    elements.screenshotFeedback.style.opacity = '0';
                }, 2000);

                // Restore UI
                setTimeout(() => {
                    elementsToHide.forEach((el, i) => el.style.display = originalDisplays[i]);
                }, 300);
            });
        },

        cleanupScene: () => {
            if (state.scene) {
                elements.aframeContainer.removeChild(state.scene);
                state.scene = null;
            }
            if (state.videoElement) {
                state.videoElement.pause();
                state.videoElement = null;
            }
            elements.controls.style.display = 'none';
            elements.videoControls.style.display = 'none';
            elements.zoomInfo.style.display = 'none';
            elements.screenshotButton.style.display = 'none';
        }
    };

    /* ------------------ Event Listeners ------------------ */

    // Video controls
    elements.videoSlider.addEventListener('input', () => {
        if (!state.videoElement || !state.videoElement.duration) return;
        const newTime = (elements.videoSlider.value / 100) * state.videoElement.duration;
        state.videoElement.currentTime = newTime;
        if (!state.isPlaying) {
            // ensure texture updates while paused
            state.videoElement.pause();
        }
    });

    elements.playPauseButton.addEventListener('click', () => {
        if (!state.videoElement) return;
        state.isPlaying ? state.videoElement.pause() : state.videoElement.play().catch(() => { });
        state.isPlaying = !state.isPlaying;
        helpers.updatePlayPauseIcon();
    });

    // Screenshot functionality
    elements.screenshotButton.addEventListener('click', interfaceHandlers.takeScreenshot);

    // Zoom handlers
    document.addEventListener('wheel', (e) => {
        if (!state.scene) return;
        helpers.updateFov(Math.sign(e.deltaY) * 2);
        e.preventDefault();
    }, { passive: false });

    // Pinch-to-zoom on laptop track pads and mobile devices
    let pinchStartDist = 0;
    document.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) pinchStartDist = helpers.dist(e.touches);
    });

    document.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2 && state.scene) {
            const d = helpers.dist(e.touches);
            if (Math.abs(d - pinchStartDist) > 5) {
                helpers.updateFov((pinchStartDist - d) > 0 ? 1 : -1);
                pinchStartDist = d;
            }
            e.preventDefault();
        }
    }, { passive: false });

    // Remove default click & drag feature
    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'CANVAS' || e.target.closest('a-scene')) {
            e.preventDefault();
            return false;
        }
    });

    const mediaParams = getMediaUrlFromParams();
    if (mediaParams.url) {
        mediaHandlers.loadMediaFromUrl(mediaParams.url);
    } else {
        elements.noPanoramaMessage.classList.add('visible');
    }
});