import React, { useState, useEffect, useRef } from "react";
import "../styles/AccessibilityToolbar.css";

const DEFAULT_SETTINGS = {
  fontSize: 100,
  dyslexia: false,
  highContrast: false,
  noMotion: false,
  lineHeight: false,
  letterSpacing: false,
};

export default function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const toggleBtnRef = useRef(null);
  const panelTitleRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("a11y-settings");
    if (saved) {
      try {
        const parsed = { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
        setSettings(parsed);
        applySettings(parsed);
      } catch {
        /* ignore corrupted storage */
      }
    }
  }, []);

  // Close on Escape and return focus to the toggle button
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Move focus into the panel when it opens + focus trap
  useEffect(() => {
    if (!isOpen) return;

    const panel = document.getElementById("a11y-panel");
    if (!panel) return;

    const focusable = panel.querySelectorAll('button, input[type="checkbox"]');
    if (focusable.length) focusable[0].focus();

    const trap = (e) => {
      if (e.key !== "Tab") return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    panel.addEventListener("keydown", trap);
    return () => panel.removeEventListener("keydown", trap);
  }, [isOpen]);

  const applySettings = (newSettings) => {
    const body = document.body;

    document.documentElement.style.fontSize = `${newSettings.fontSize}%`;

    body.classList.toggle("a11y-dyslexia", newSettings.dyslexia);
    body.classList.toggle("a11y-high-contrast", newSettings.highContrast);
    body.classList.toggle("a11y-no-motion", newSettings.noMotion);
    body.classList.toggle("a11y-line-height", newSettings.lineHeight);
    body.classList.toggle("a11y-letter-spacing", newSettings.letterSpacing);

    localStorage.setItem("a11y-settings", JSON.stringify(newSettings));
  };

  const updateSetting = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  const resetAll = () => {
    setSettings(DEFAULT_SETTINGS);
    applySettings(DEFAULT_SETTINGS);
  };

  return (
    <div className="fixed top-[70px] right-[25px] z-[1000] font-sans sm:top-[80px] sm:right-[50px]">
      <button
        ref={toggleBtnRef}
        className="w-11 h-11 rounded-full bg-accent text-bg-primary border-none cursor-pointer text-[20px] flex items-center justify-center p-0 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:outline hover:outline-2 hover:outline-accent hover:outline-offset-[3px] focus:outline focus:outline-2 focus:outline-accent focus:outline-offset-[3px]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close accessibility panel" : "Open accessibility panel"}
        aria-expanded={isOpen}
        aria-controls="a11y-panel"
      >
        <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1.4em" height="1.4em">
          <path d="M256,112a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,112Z"/>
          <path d="M432,112.8l-.45.12h0l-.42.13c-1,.28-2,.58-3,.89-18.61,5.46-108.93,30.92-172.56,30.92-59.13,0-141.28-22-167.56-29.47a73.79,73.79,0,0,0-8-2.58c-19-5-32,14.3-32,31.94,0,17.47,15.7,25.79,31.55,31.76v.28l95.22,29.74c9.73,3.73,12.33,7.54,13.6,10.84,4.13,10.59.83,31.56-.34,38.88l-5.8,45L150.05,477.44q-.15.72-.27,1.47l-.23,1.27h0c-2.32,16.15,9.54,31.82,32,31.82,19.6,0,28.25-13.53,32-31.94h0s28-157.57,42-157.57,42.84,157.57,42.84,157.57h0c3.75,18.41,12.4,31.94,32,31.94,22.52,0,34.38-15.74,32-31.94-.21-1.38-.46-2.74-.76-4.06L329,301.27l-5.79-45c-4.19-26.21-.82-34.87.32-36.9a1.09,1.09,0,0,0,.08-.15c1.08-2,6-6.48,17.48-10.79l89.28-31.21a16.9,16.9,0,0,0,1.62-.52c16-6,32-14.3,32-31.93S451,107.81,432,112.8Z"/>
        </svg>
      </button>

      {isOpen && (
        <div
          id="a11y-panel"
          className="a11y-panel absolute top-[60px] right-0 bg-bg-secondary border border-accent rounded-lg p-4 w-[280px] shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
          role="region"
          aria-label="Accessibility controls"
        >
          <h3
            className="text-text-primary text-[1.125rem] font-semibold mb-3 mt-0 pb-2 border-b border-accent"
            tabIndex={-1}
            ref={panelTitleRef}
          >
            Accessibility
          </h3>

          <div className="mb-3" role="group" aria-label="Font size">
            <span className="block text-text-primary text-[1.075rem] mb-[6px] font-medium">
              Font size
            </span>
            {/* a11y-control-row: keeps CSS class for `button` descendant styles */}
            <div className="a11y-control-row flex items-center gap-2 justify-between">
              <button
                onClick={() => updateSetting("fontSize", Math.max(100, settings.fontSize - 10))}
                aria-label="Decrease font size"
              >
                <span aria-hidden="true">−</span>
              </button>
              <span className="text-text-secondary text-base min-w-[50px] text-center">
                {settings.fontSize}%
              </span>
              <button
                onClick={() => updateSetting("fontSize", Math.min(150, settings.fontSize + 10))}
                aria-label="Increase font size"
              >
                <span aria-hidden="true">+</span>
              </button>
            </div>
          </div>

          {[
            { key: "dyslexia", label: "Dyslexia font" },
            { key: "highContrast", label: "High contrast" },
            { key: "noMotion", label: "No animations" },
            { key: "lineHeight", label: "Line height" },
            { key: "letterSpacing", label: "Letter spacing" },
          ].map(({ key, label }) => (
            <div key={key} className="mb-3">
              {/* a11y-checkbox-label: keeps CSS class for input[type=checkbox] descendant styles */}
              <label className="a11y-checkbox-label flex items-center gap-[10px] cursor-pointer text-text-primary text-[1.075rem] select-none">
                <input
                  type="checkbox"
                  checked={settings[key]}
                  onChange={(e) => updateSetting(key, e.target.checked)}
                />
                <span>{label}</span>
              </label>
            </div>
          ))}

          <button
            className="a11y-reset-btn w-full py-[10px] mt-3 bg-accent text-bg-primary border-none rounded cursor-pointer text-[1.075rem] font-semibold transition-all duration-200"
            onClick={resetAll}
          >
            Reset all
          </button>
        </div>
      )}
    </div>
  );
}
