"use client";

import { useCallback, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesContainer() {
  const [init, setInit] = useState(false);
  const [particleCount, setParticleCount] = useState(() =>
    window.innerWidth < 768 ? 200 : 100
  );

  // Update count on resize
  useEffect(() => {
    const handleResize = () => {
      const newCount = window.innerWidth < 768 ? 200 : 100;
      setParticleCount(newCount);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // eslint-disable-next-line no-unused-vars
  const particlesLoaded = useCallback(async (container) => {}, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 1,
            particles: {
              life: {
                duration: {
                  value: 2,
                },
                count: 1,
              },
              move: {
                speed: 3,
                outModes: {
                  default: "destroy",
                },
              },
            },
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        life: {
          count: 0,
        },
        color: {
          value: "#fff",
        },
        links: {
          color: "#663399",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 100,
          },
          value: particleCount,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [particleCount]
  );

  if (!init) {
    return (
      <div
        style={{
          inset: 0,
          width: "100%",
          height: "100%",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "blue",
          opacity: 0.2,
        }}
      >
        Loading particles...
      </div>
    );
  }

  return (
    <div
      style={{
        inset: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 1,
      }}
    >
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}
