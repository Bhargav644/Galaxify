/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/
import Planet from '../../components/planets'
import { Planets, theme } from '../constant'
import { packagePlanet,activityCard,packageWrapper,activityTitle,activityWrapper,buttonWrapper} from './styles'
import StarsModel from '../../components/stars';
import { useNavigate } from 'react-router-dom';

function PackagesModule({packagesInfo}) {

  const navigate=useNavigate();
  const {Duration=1,ImageUrl='',PackageName='',activities=[],DestinationName="Fallback"}=packagesInfo[0];
  return <div>
    {
       <div style={{backgroundColor:theme.dark}} className={packageWrapper}>
            <StarsModel/>
            <div className={packagePlanet}>
                <Planet enableZoom={true} planetTexture={Planets[DestinationName ?? "Fallback"]?.image}  planetRadius={Planets[DestinationName ?? "Fallback"]?.radius}/>
            </div>
            <h1 className='title-text'>{PackageName}</h1>
            <img className='title-image' src={ImageUrl}/>
            <div>
                
                {
                    activities.map((obj,idx)=>{
                        return (
                            <div className={activityWrapper} key={String(idx+1)}>
                                 <p className={activityTitle}>{idx+1}. {obj.activityName}</p>
                                 <div className={activityCard(idx+1)}>
                                    <div style={{width:"20%"}}>
                                        <img className='activity-image' src={obj.image}/>
                                    </div>
                                    <div style={{width:"80%"}}>
                                        <p className='activity-text'>{obj.description}</p>
                                    </div>
                                </div>
                            </div>
                        ) 
                            
                    })
                }

            </div>
            <center><button onClick={()=>{if(window.prompt("Booked Successfully Type OK")) navigate("/") }} className={buttonWrapper}>Book The Package</button></center>
        </div>
    }
  </div>
}

export default PackagesModule