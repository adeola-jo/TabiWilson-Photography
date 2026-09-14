"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [["Work", "#work"], ["Approach", "#approach"], ["Contact", "#contact"]];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const outside = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const resize = (event) => { if (event.matches) setOpen(false); };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <nav className="container navigation" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)} aria-label="TabiWilson Photography home">TabiWilson</a>
        <div className="desktop-navigation">
          {links.map(([label, href]) => <a className="nav-link" key={href} href={href}>{label}</a>)}
          <a className="button button-outline" href="#contact">Let us create</a>
        </div>
        <button className="icon-button menu-toggle" type="button" ref={toggleRef} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <div className="mobile-navigation" id="mobile-navigation" hidden={!open}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="button button-solid" href="#contact" onClick={() => setOpen(false)}>Let us create</a>
        </div>
      </nav>
    </header>
  );
}
