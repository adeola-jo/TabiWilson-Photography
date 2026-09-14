"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { assetPath, photographs } from "@/lib/portfolio";

const filters = [["all", "All"], ["portraits", "Portraits"], ["stories", "Stories"]];

export default function PhotoGallery() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const visible = photographs.filter(photo => filter === "all" || photo.category === filter);
  const photo = selected === null ? null : visible[selected];
  const isOpen = selected !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen) {
      if (dialog.open) {
        dialog.close();
        triggerRef.current?.focus({ preventScroll: true });
      }
      return;
    }
    if (!dialog.open) dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  const close = () => setSelected(null);
  const move = (direction) => setSelected(index => (index + direction + visible.length) % visible.length);

  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-kicker">A closer look</p>
            <h2 id="work-title">Selected Frames</h2>
          </div>
          <div className="filters" role="group" aria-label="Filter photographs">
            {filters.map(([value, label]) => <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>)}
          </div>
        </div>
        <p className="sr-only" role="status" aria-live="polite">Showing {visible.length} {filter === "all" ? "sample photographs" : `sample ${filter}`}</p>
        <div className={`photo-grid${filter !== "all" ? " photo-grid-filtered" : ""}`}>
          {visible.map((item, index) => (
            <figure className={`photo-card photo-${item.shape}`} key={item.id}>
              <button type="button" className="photo-open" aria-label={`View ${item.title}`} aria-haspopup="dialog" onClick={(event) => { triggerRef.current = event.currentTarget; setSelected(index); }}>
                <picture><source media="(max-width: 767px)" srcSet={assetPath(`/images/${item.image}-small.webp`)} /><Image src={assetPath(`/images/${item.image}.webp`)} alt={item.alt} width={1280} height={1600} sizes="(max-width: 767px) 100vw, 66vw" /></picture>
                <span className="photo-overlay"><span><Maximize2 size={15} aria-hidden="true" />View photograph</span></span>
              </button>
              <figcaption><h3>{item.title}</h3><span className="eyebrow">{item.label}</span></figcaption>
            </figure>
          ))}
        </div>
        <p className="sample-note">Sample photographs for layout review. Explore the latest work on <a href="https://www.instagram.com/wlsnarchives/" target="_blank" rel="noopener noreferrer">Instagram<span className="sr-only"> (opens in a new tab)</span></a>.</p>
      </div>
      <dialog ref={dialogRef} className="lightbox" aria-labelledby="lightbox-title" aria-describedby="lightbox-description" onCancel={(event) => { event.preventDefault(); close(); }} onClick={(event) => { if (event.target === event.currentTarget) close(); }} onKeyDown={(event) => {
        if (event.key === "Tab") {
          const controls = event.currentTarget.querySelectorAll("button:not([disabled])");
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      }}>
        <div className="lightbox-content">
          <div className="lightbox-top"><span className="eyebrow">Selected Frames</span><button type="button" className="icon-button" onClick={close} aria-label="Close photograph" autoFocus><X aria-hidden="true" /></button></div>
          {photo && <>
            <div className="lightbox-image"><Image key={photo.id} src={assetPath(`/images/${photo.image}.webp`)} alt={photo.alt} width={1280} height={1600} loading="eager" /></div>
            <div className="lightbox-bottom">
              <div aria-live="polite" aria-atomic="true"><h2 id="lightbox-title">{photo.title}</h2><p id="lightbox-description">{selected + 1} / {visible.length} · {photo.label} · Sample photograph</p></div>
              <div className="lightbox-controls"><button type="button" className="icon-button" onClick={() => move(-1)} aria-label="Previous photograph"><ArrowLeft aria-hidden="true" /></button><button type="button" className="icon-button" onClick={() => move(1)} aria-label="Next photograph"><ArrowRight aria-hidden="true" /></button></div>
            </div>
          </>}
        </div>
      </dialog>
    </section>
  );
}
