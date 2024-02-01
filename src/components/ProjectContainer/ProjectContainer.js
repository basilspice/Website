import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import AndroidIcon from '@material-ui/icons/Android'
import AppleIcon from '@material-ui/icons/Apple'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target="_blank" rel="noreferrer"
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target="_blank" rel="noreferrer"
      >
        <LaunchIcon />
      </a>
      
    )}
    {project.google && (
      <a
        href={project.google}
        aria-label='google play store'
        className='link link--icon'
        target="_blank" rel="noreferrer"
      >
        <AndroidIcon />
      </a>
    )}
    {project.apple && (
      <a
        href={project.apple}
        aria-label='apple app store'
        className='link link--icon'
        target="_blank" rel="noreferrer"
      >
        <AppleIcon />
      </a>
    )}
    
  </div>
)

export default ProjectContainer
