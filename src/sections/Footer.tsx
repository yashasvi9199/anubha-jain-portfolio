import { ReactElement } from 'react';
import profileData from '../data/profile.json';


export function Footer(): ReactElement {
  return (
    <footer className="py-8 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <span className="font-serif italic text-lg text-white">{profileData.name}</span>
          <p className="text-xs text-secondary mt-1">{profileData.role}</p>
        </div>
        
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}