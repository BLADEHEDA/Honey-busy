import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF ,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons' 
import Team1 from "../assets/team1.jpg"
import Team2 from "../assets/team2.jpg"
import Team3 from "../assets/team3.jpg"
import backgroundImage from "../assets/about-img2.jpg" 


export const Experts = [
    {
        id:1,
      image: Team1,
      title: "BEEKEEPER",
      name: "GREGORY SILVA",
      content: "Meet our expert beekeeper, passionate about honeybee health. With years of experience, they manage colonies, extract, and ensure top-quality honey production",
    },
    {
        id:2,
      image:Team2,
      title: "FIELD TECHNICIAN",
      name: "ROGER PORTER", 
      content: "AAt our honey business's core, we're dedicated to beekeeping excellence, fueling our success in producing premium honey products. Explore the bee world with us!",
    },
    {
        id:3,
      image:Team3 ,
      title: "GARDENER",
      name: "WALTER HARRIS",
      content: "Our beekeeping expert oversees hive health, manages bee colonies, extracts honey, and ensures top quality. They also shape successful market strategies, making our honey products",
    },
  ];
  interface TeamCardsprop{
    image:string,
    title:string,
    name:string, 
    content:string,
}
const TeamCardsProps:React.FC<TeamCardsprop> = ({image,title,name ,content}) => {
    return (
      <div className='mb-[3em] md:mb-[0em] bg-transparent '>
            <div>
        <div className="mb-[1.5em] "><img src={image} alt="imagename" /> </div>
      <p className="text-[#C74817] text-[0.9em] ">{title} </p>
      <h2 className="text-[1.4em] text-[black] font-[600]  ">{name} </h2>
      <p className="text-[1em] text-[black] my-3  ">{content} </p>
      <div className="mb-[2em] flex border- w-[9em] md:w-[7.5em] justify-between  border-[red]  ">
      <p className="bg-[#C74817] p-4 h-[1em] w-[1em] rounded-full flex items-center justify-center   ">
         <FontAwesomeIcon icon={faFacebookF as IconProp} className='hover:ml-[0.8em] text-[white]' />
      </p>
      <p className="bg-[#C74817] p-4 h-[1em] w-[1em] rounded-full flex items-center justify-center   ">
         <FontAwesomeIcon icon={faInstagram as IconProp} className='hover:ml-[0.8em] text-[white]' />
      </p>
      <p className="bg-[#C74817] p-4 h-[1em] w-[1em] rounded-full flex items-center justify-center   ">
         <FontAwesomeIcon icon={faTwitter as IconProp} className='hover:ml-[0.8em] text-[white]' />
      </p>  
    </div>
      <div className="">

      </div>
    </div>
      </div>
    )
  }

const TeamCards = () => {
    const bgImage: React.CSSProperties = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'50vh',
        width:'100%'
        

    }
  return (
    <main className="px-[2em] py-[6em] md:px-[3em] lg:px-[5.5em] 
    lg:pt-[7em] pb-[7em] bg-transparent" style={bgImage}>
              <div className="text-center mb-[4em]"  >
        <h1 className="font-[700] text-[2.5em] text-[black] " > OUR TEAM OF EXPERTS</h1>
        <p className="text-[1.1em] mt-4">Meet our passionate team of honey production professionals</p>
      </div>
    <div className='team ' >
        {
            Experts.map((expert,index)=>(
                <TeamCardsProps
                key={index}
                image={expert.image}
                title={expert.title}
                name={expert.name}
                content={expert.content}
                />
            ) )
        }
    </div>
    </main>
  )
}

export default TeamCards
