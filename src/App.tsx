import './App.css';
import LinkTree from './components/LinkTree/LinkTree';

const App: React.FC = () => {
  const profileData = {
    name: "Seu Nome",
    bio: "Desenvolvedor Web | React | TypeScript",
    profileImage: "https://github.com/brunokemel.png",
    links: [
      {
        title: "GitHub",
        url: "https://github.com/seu-usuario",
        icon: "github"
      },
      {
        title: "LinkedIn",
        url: "https://linkedin.com/in/seu-usuario",
        icon: "linkedin"
      },
      {
        title: "Portfolio",
        url: "https://seu-portfolio.com",
        icon: "briefcase"
      },
      {
        title: "Instagram",
        url: "https://instagram.com/seu-usuario",
        icon: "instagram"
      },
      {
        title: "Twitter",
        url: "https://twitter.com/seu-usuario",
        icon: "twitter"
      }
    ]
  };

  return (
    <div className="App">
      <LinkTree
        name={profileData.name}
        bio={profileData.bio}
        profileImage={profileData.profileImage}
        links={profileData.links}
      />
    </div>
  );
};

export default App;
