import type { IconBaseProps } from 'react-icons';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaServer,
  FaMobile,
  FaDatabase,
  FaCloudUploadAlt,
  FaCogs
} from 'react-icons/fa';
import React from 'react';

export const Icons = {
  GitHub: FaGithub as React.FC<IconBaseProps>,
  LinkedIn: FaLinkedin as React.FC<IconBaseProps>,
  Email: FaEnvelope as React.FC<IconBaseProps>,
  Code: FaCode as React.FC<IconBaseProps>,
  Server: FaServer as React.FC<IconBaseProps>,
  Mobile: FaMobile as React.FC<IconBaseProps>,
  Database: FaDatabase as React.FC<IconBaseProps>,
  Cloud: FaCloudUploadAlt as React.FC<IconBaseProps>,
  Cogs: FaCogs as React.FC<IconBaseProps>
};