gsap.registerPlugin(ScrollTrigger);

const heroVideo = document.getElementById("hero-video");
const heroMain = document.getElementById("hero-main");
const premiumHeadline = document.getElementById("premium-headline-container");
const audioAwakening = document.getElementById("audio-awakening");
const audioToggle = document.getElementById("audio-toggle");
const audioStatusText = document.getElementById("audio-status-text");
const iconMuted = document.getElementById("icon-muted");
const iconUnmuted = document.getElementById("icon-unmuted");

// Cinematic Video-Driven Scrollytelling: Skybox Refactor
window.addEventListener('load', () => {
  if (heroVideo.readyState >= 2) {
    initSkyboxScrub();
  } else {
    heroVideo.addEventListener('loadedmetadata', initSkyboxScrub);
  }
});

function initSkyboxScrub() {
  const duration = heroVideo.duration;

  // Ensure ScrollTrigger height is precise for the 600vh journey
  ScrollTrigger.refresh();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroMain,
      start: "top top",
      end: "bottom bottom",
      scrub: 2.2, // Weighted momentum
      onUpdate: (self) => {
        // 1. Audio Hard Unlock: Volume Crescendo
        // Ensures the rumble is audible even at the top once awakened
        if (!heroVideo.muted) {
          // Ramp from baseline 0.6 to 1.0 as the chip descends
          let volume = gsap.utils.clamp(0.6, 1, (self.progress * 0.4) + 0.6);
          heroVideo.volume = volume;
        }
      }
    }
  });

  // PERFORMANCE: Hardware-accelerated direct currentTime tween
  tl.to(heroVideo, {
    currentTime: duration,
    ease: "none"
  }, 0);

  // TYPOGRAPHY: Physical Sync Reveal (5% -> 20%)
  // Authoritative 'Skybox' entrance that locks to the scroll depth
  tl.to(premiumHeadline, {
    opacity: 1,
    y: 0,
    ease: "none"
  }, 0.05).duration(0.15); // Short, confident reveal distance

  heroVideo.pause();
}

// Breaking the 'Silent Monolith' Wall: Hard Unlock Handshake
function awakenAudio() {
  // HARD UNLOCK: Force un-mute and set immediate audible baseline
  heroVideo.muted = false;
  heroVideo.volume = 0.6; // The audible rumble of the monolith

  // Handshake: Let the media engine breathe
  heroVideo.play().catch(e => console.warn("Audio Context Unlock:", e));

  // Transition UI
  gsap.to(audioAwakening, {
    opacity: 0,
    duration: 0.8,
    onComplete: () => {
      audioAwakening.style.display = "none";
      audioToggle.style.pointerEvents = "auto";
      gsap.to(audioToggle, { opacity: 1, duration: 0.5 });
    }
  });

  audioStatusText.innerText = "Immersive Audio";
  iconMuted.classList.add("hidden");
  iconUnmuted.classList.remove("hidden");
}

audioAwakening.addEventListener("click", awakenAudio);

// Subtle control
audioToggle.addEventListener("click", () => {
  const isMuted = heroVideo.muted;
  if (isMuted) {
    heroVideo.muted = false;
    heroVideo.volume = 0.6;
    audioStatusText.innerText = "Immersive Audio";
    iconMuted.classList.add("hidden");
    iconUnmuted.classList.remove("hidden");
  } else {
    heroVideo.muted = true;
    audioStatusText.innerText = "Sound Muted";
    iconMuted.classList.remove("hidden");
    iconUnmuted.classList.add("hidden");
  }
});

// ---------------------------------------------------------
// PHASE 2: PRECISION DATA DEEP DIVE
// ---------------------------------------------------------

function initDivergenceChart() {
  const pathNVTS = document.querySelector(".path-nvts");
  const pathSemi = document.querySelector(".path-semi");
  const pathRTY = document.querySelector(".path-rty");
  const tooltip = document.getElementById("nvts-tooltip");

  if (!pathNVTS || !pathSemi || !pathRTY) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#divergence-section",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5
    }
  });

  // Bloomberg Line Growth via Scroll
  tl.to([pathRTY, pathSemi], {
    strokeDashoffset: 0,
    ease: "none",
    duration: 1
  }, 0)
    .to(pathNVTS, {
      strokeDashoffset: 0,
      ease: "power2.inOut",
      duration: 1.2
    }, 0)
    .to(tooltip, {
      opacity: 1,
      y: 0,
      duration: 0.2
    }, "-=0.2");
}

function initValuationChart() {
  const barNVTS = document.getElementById("bar-nvts");
  const barNVDA = document.getElementById("bar-nvda");
  const barAMD = document.getElementById("bar-amd");

  if (!barNVTS || !barNVDA || !barAMD) return;

  const vtl = gsap.timeline({
    scrollTrigger: {
      trigger: "#valuation-section",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5
    }
  });

  // Staggered Overshoot Reveal from height 0
  vtl.from([barAMD, barNVDA], {
    height: "0%",
    duration: 1,
    stagger: 0.2,
    ease: "power1.out"
  })
    .from(barNVTS, {
      height: "0%",
      ease: "power3.out",
      duration: 1.5
    }, "-=0.8");
}

function initGlobalSurgeChart() {
  const container = document.getElementById("slide4-container");
  if (!container) return;

  const pillarGrowth = document.getElementById("pillar-growth");
  const pillarDivider = document.getElementById("pillar-divider");
  const label2030 = document.getElementById("label-2030");
  const japanMap = document.getElementById("japan-map");
  const japanHint = document.getElementById("japan-hint");

  // Scroll Animation: Pillar Growth
  gsap.to(pillarGrowth, {
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    height: "60%",
    duration: 2,
    ease: "power4.out",
    onUpdate: function() {
      const progress = parseFloat(pillarGrowth.style.height);
      // Show divider as it grows
      if (progress > 1) {
        gsap.to(pillarDivider, { opacity: 1, duration: 0.3 });
      }
      // Show 2030 label as it nears completion
      if (progress > 50) {
        gsap.to(label2030, { opacity: 1, duration: 0.5 });
      }
    }
  });

  // Click Interaction: Japan Illumination
  pillarGrowth.addEventListener("click", () => {
    const mapContainer = document.getElementById("japan-map-container");
    const pillarMaster = document.getElementById("pillar-master-container");
    const isIlluminated = mapContainer.classList.contains("active");
    
    if (!isIlluminated) {
      // Shrink and move pillar right
      gsap.to(pillarMaster, {
        x: "50px",
        scale: 0.85,
        duration: 0.8,
        ease: "power2.inOut"
      });
      // Show map on left (Glow gold)
      gsap.to(mapContainer, {
        opacity: 1,
        x: 0,
        filter: "sepia(1) saturate(10) hue-rotate(-15deg) brightness(1.2) drop-shadow(0 0 25px rgba(241,139,17,0.9))",
        duration: 1,
        ease: "power2.out"
      });
      mapContainer.classList.add("active");
      japanHint.textContent = "Japan Demand Equivalent Reached";
      japanHint.classList.remove("animate-pulse");
      japanHint.style.color = "#f18b11";
    } else {
      // Restore pillar
      gsap.to(pillarMaster, {
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.inOut"
      });
      // Hide map
      gsap.to(mapContainer, {
        opacity: 0,
        x: "-40px",
        duration: 0.8,
        ease: "power2.in"
      });
      mapContainer.classList.remove("active");
      japanHint.textContent = "Click growth to compare with Japan";
      japanHint.classList.add("animate-pulse");
      japanHint.style.color = "";
    }
  });
}

function initGanVideoSection() {
  const container = document.getElementById("gan-video-container");
  if (!container) return;

  gsap.to(container, {
    scrollTrigger: {
      trigger: "#gan-revolution",
      start: "top 75%",
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: 0, // Animates from translate-y-10 in Tailwind
    duration: 1.5,
    ease: "power3.out"
  });
}

function initPreemptiveCycle() {
  const container = document.getElementById("preemptive-cycle-section");
  if (!container) return;

  const currentBubbles = document.querySelectorAll(".bubble-current");
  const barTransformers = document.getElementById("bar-transformers");
  const barChips = document.getElementById("bar-chips");
  const barOracle = document.getElementById("bar-oracle");
  const lockedBadge = document.getElementById("navitas-locked-badge");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top center",
      end: "bottom center",
      scrub: 1,
    }
  });

  // Module B: Sequence Collapse (Bubbles slamming together)
  // Initially at left-0, 45%, 90%
  tl.to(currentBubbles[1], { left: "10%", duration: 1, ease: "power2.inOut" }, 0)
    .to(currentBubbles[2], { left: "20%", duration: 1, ease: "power2.inOut" }, 0);

  // Module C: Lead Time Bars (Horizontal growth)
  tl.to(barTransformers, { width: "100%", duration: 1, ease: "none" }, 0)
    .to(barChips, { width: "100%", duration: 1, ease: "none" }, 0.2)
    .to(barOracle, { width: "100%", duration: 1, ease: "none" }, 0.4);

  // Navitas Locked Highlight
  tl.to(lockedBadge, { 
    opacity: 1, 
    x: 0, 
    duration: 0.3, 
    ease: "back.out(2)" 
  }, 0.8);
}

function initRealityGapDashboard() {
  const dashboard = document.getElementById("reality-gap-dashboard");
  if (!dashboard) return;

  const barPlans = document.getElementById("dash-bar-plans");
  const barRealistic = document.getElementById("dash-bar-realistic");
  const barOrders = document.getElementById("dash-bar-orders");
  const barShipments = document.getElementById("dash-bar-shipments");
  const timelineBurn = document.getElementById("dash-timeline-burn");
  const timelineProduction = document.getElementById("dash-timeline-production");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: dashboard,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  tl.to(dashboard, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
    .to(barPlans, { width: "100%", duration: 1, ease: "power2.out" }, "-=0.5")
    .to(barRealistic, { width: "35%", duration: 1, ease: "power2.out" }, "<")
    .to(barOrders, { height: "100%", duration: 1, ease: "bounce.out" }, "-=0.5")
    .to(barShipments, { height: "14%", duration: 1, ease: "bounce.out" }, "<")
    .to(timelineBurn, { width: "50%", duration: 1, ease: "none" }, "-=0.5")
    .to(timelineProduction, { width: "50%", duration: 1, ease: "none" }, "<");
}

// Master Initialization: Wait for DOM and Media
window.addEventListener('load', () => {
  // Initialize Phase 2 Data Charts
  initDivergenceChart();
  initValuationChart();
  
  // Initialize New Sections
  initGlobalSurgeChart();
  initGanVideoSection();
  initPreemptiveCycle();
  initRealityGapDashboard();

  // Refresh ScrollTrigger to recalculate layout shifts
  ScrollTrigger.refresh();
});
