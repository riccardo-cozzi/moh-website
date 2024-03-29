import logo from '../logo.png';

export const WorkinProgress = () => {
    console.log("WorkinProgress");
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            
            <p>
            <br /><br /><br /> Website under construction 
            <br/> <small>v 0.1.5</small>
            </p>
            <a
            className="App-link"
            href="https://github.com/riccardo-cozzi/moh-website/raw/main/starachowice_report_first_step_to_europe.pdf.zip"
            target="_blank"
            rel="noopener noreferrer"
            >
            🇪🇺First Step to Europe Poland 🇵🇱
            </a>

            <br/> 

            <a
            className="App-link"
            href="https://github.com/riccardo-cozzi/moh-website/raw/main/drama_report_first_step_to_europe.pdf.zip"
            target="_blank"
            rel="noopener noreferrer"
            >
            🇪🇺 First Step to Europe Greece 🇬🇷
            </a>
        </div>
      );
}