import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLink45Deg, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/ZERO-KAMAL" target='_blank'>

        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/kamal-khatri97/" target='_blank'>

        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100031071495519" target='_blank'>

        <BsFacebook />
      </a>
    </div>
  </div>
);

export default SocialMedia;
