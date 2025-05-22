import { useVoting } from '../hooks/useVoting';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3Alt, faSquareJs  } from "@fortawesome/free-brands-svg-icons";

const handleRedirect = (projectType, id) => {
  if (projectType) {
      window.location.href = '/main/react/' + id;
  } else {
      window.location.href = '/main/plain/' + id;
  }
};

export const TemplateCard = ({ id, title, description, initialVotes, projectType, user }) => {
    const { votes, loading, error, handleVote } = useVoting(id, initialVotes, user);
    let type = projectType;
    return (
      <div className="bg-slate-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300 ease-out">
        <div className="flex items-center justify-between mb-4" onClick={()=>{handleRedirect(projectType, id)}}>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>

        <div className="text-slate-300 text-sm leading-relaxed mb-4 h-28 overflow-hidden text-ellipsis line-clamp-5"
        onClick={()=>{handleRedirect(projectType, id)}}
        >{description}</div>
        
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <button 
              onClick={() =>{if(user) handleVote('up')}}
              disabled={loading}
              className="group flex items-center gap-2 px-3 py-2 rounded-lg 
                hover:bg-slate-800 transition-colors disabled:opacity-50"
              aria-label="Upvote"
            >
              <svg 
                className={`w-6 h-6 transition-all 
                  ${votes.upvotes.includes(user?._id) 
                    ? 'fill-green-500 stroke-green-500' 
                    : 'fill-transparent stroke-slate-400 group-hover:stroke-green-400'}`}
                viewBox="0 0 24 24" 
                strokeWidth="2"
              >
                <path d="M12 3L3 18h18L12 3z" />  
              </svg>
              <span className={`text-sm font-medium
                ${votes.upvotes.includes(user?._id) 
                  ? 'text-green-500' 
                  : 'text-slate-400 group-hover:text-slate-300'}`}>
                {votes.upvotes.length}
              </span>
            </button>
            <button 
              onClick={() => {if(user) handleVote('down')}}
              disabled={loading}
              className="group flex items-center gap-2 px-3 py-2 rounded-lg 
                hover:bg-slate-800 transition-colors disabled:opacity-50"
              aria-label="Downvote"
            >
              <svg 
                className={`w-6 h-6 transition-all rotate-180 
                  ${votes.downvotes.includes(user?._id) 
                    ? 'fill-red-500 stroke-red-500' 
                    : 'fill-transparent stroke-slate-400 group-hover:stroke-red-400'}`}
                viewBox="0 0 24 24" 
                strokeWidth="2"
              >
                <path d="M12 3L3 18h18L12 3z" />  
              </svg>
              <span className={`text-sm font-medium
                ${votes.downvotes.includes(user?._id) 
                  ? 'text-red-500' 
                  : 'text-slate-400 group-hover:text-slate-300'}`}>
                {votes.downvotes.length}
              </span>
            </button>
          </div>
          <div className="rounded-lg">
          {type? (<FontAwesomeIcon icon={faReact} className='h-8 w-8' />):(
            <div>
            <FontAwesomeIcon icon={faHtml5} className='h-7 w-7' />
            <FontAwesomeIcon icon={faCss3Alt} className='h-7 w-7' />
            <FontAwesomeIcon icon={faSquareJs} className='h-7 w-7' />
            </div>
          )}
          </div>
        </div>
        </div>
    );
};