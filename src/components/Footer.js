import React from "react";
import "./Footer.css";

function Footer() {
  const youtube = "https://www.youtube.com/channel/UCTwC-PFmfAUMYmHUl1r_cZw";
  const soundcloud = "https://soundcloud.com/bbydinobeats";
  const insta = "https://www.instagram.com/bbydinobeats";
  const fb = "https://www.facebook.com";
  const linkedin = "https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548";
  const github = "https://github.com/bbydino";

  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">smexy stocks © 2020</small>
          <div className="social-icons">
            <a href={fb} target="blank" className="social-icon-link facebook" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href={soundcloud} target="blank" className="social-icon-link soundcloud" aria-label="SoundCloud">
              <i className="fab fa-soundcloud" />
            </a>
            <a href={insta} target="blank" className="social-icon-link instagram" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href={youtube} target="blank" className="social-icon-link youtube" aria-label="Youtube">
              <i className="fab fa-youtube" />
            </a>
            <a href={linkedin} target="blank" className="social-icon-link linkedin" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </a>
            <a href={github} target="blank" className="social-icon-link github" aria-label="LinkedIn">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
