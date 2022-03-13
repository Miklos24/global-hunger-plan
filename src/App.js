import './App.css';
import Button from '@mui/material/Button';
import { Create, Public, LooksOne, LooksTwo, Looks3, Looks4, Looks5 } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { Chart, PieSeries, BarSeries } from '@devexpress/dx-react-chart-material-ui';
import { Palette } from '@devexpress/dx-react-chart';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails, Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

function App() {
  const [seconds, setSeconds] = useState(0);
  const lightGreen = "#DCEDC8";
  const slate = "#37474F";

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 3456)
    return ()=> clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="title-section">
        <Typography variant={isMobile ? "h4" : "h2"}>
          <span> Since you've arrived on this site, {seconds} people have died of hunger-related causes. </span>
        </Typography>
      </div>
      <div className="chart-section">
        <Chart
          data={[ {hungry: 'Yes', percent: 30}, {hungry: 'No', percent: 70} ]}
          height={400}
          width={200}
        >
          <Palette scheme={[slate, lightGreen]} />
          <PieSeries
            valueField="percent"
            argumentField="hungry"
            outerRadius={0.8}
          />
        </Chart>
        <Typography variant="h5">
          <span> According to the UN, 30% of all people suffer from some kind of food scarcity. </span>  
        </Typography>
      </div>
      <div className="chart-section">
        <Chart
          data={[ {year: "1973", value: 1}, {year: "2013", value: 2} ]}  
          height={120}
          width={140}
        >
          <Palette scheme={[slate, lightGreen]} />
          <BarSeries 
            valueField="value"
            argumentField="year"
          />
        </Chart>
        <Typography variant="h5">
          <span> At the same time, median caloric intake has doubled in the last 40 years. </span>
        </Typography>
      </div>
      <div className="chart-section">
        <Public sx={{ color: slate, fontSize: 130 }} />
        <Typography variant="h5">
          <span> These problems affect all countries, regardless of wealth. </span>
        </Typography>
      </div>
      <div className="call-to-action">
        <Typography variant="h2" align="center">
          <span> Expand the following sections to learn more about the problem: </span>
        </Typography>
      </div>
      <div className="accordion-section">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="h5"> Reasons for World Hunger </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            The two primary reasons for world hunger are the lack of food or food shortages. This is due to a lack of production or trade to an area with a supply shortage. The second reason is the lack of financial prosperity to afford common food goods. This is one reason for food stamps in America for example. By calculating the entire food supply on earth by calories and dividing it by the world population; One can solve whether or not there is physically enough food on earth to sustain 6.3 billion people.
            </Typography>
            <Typography variant="caption">
              Source: The state of world hunger. (1994). Nutrition Reviews, 52(5), 151. 
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="accordion-section">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="h5"> Hunger in Developed Countries </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             In 1994, there was an estimated 30,000,000 Americans who were not able to afford the adequate amount of food to maintain prosperous health (Riches, 1997). Food insecurity in America is like food insecurity around the world. It comes down to the lack of ability of an individual or family to purchase goods in the economy. Either there is no supply or a lack of resources to purchased said supply. For example, a lack or goods and supply shortages will affect locations that are geographically isolated. The other could be misguided consumption of food or rather the misallocation of funds for food. A government’s highest priority should be that of the honorable endeavor of feeding its population. Allowing not one American to go hunger or be forced to eat spoiled food. Poverty is an underlying cause of malnutrition or hunger in American and the ability to provide prosperous occupations will decrease the susceptibility of an individual or family to go without food. 
            </Typography>
            <Typography variant="caption">
              Source: Riches, G. (1997). Hunger and the Welfare State: Comparative perspectives. First World Hunger, 1–13. https://doi.org/10.1007/978-1-349-25187-2_1 
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="accordion-section">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="h5"> Funding World Food Programs (WFP's) </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            WFP’s operations are funded entirely through voluntary contributions, with government funding as the principal source. Funding received is typically tied to specific operations or programmatic objectives, which might differ from where funding is needed the most. Because the funding amount is often uncertain and confirmed at the last minute, WFP must always be ready to respond quickly and utilize funds to meet the most pressing needs.To avoid undercutting the existing economies of targeted countries, WFP purchases locally as much as possible; in 2020, 80% of food was purchased in developing countries. When feasible, it also uses cash-based mechanisms (e.g., cash, vouchers, bank transfers, e-cards) to allow the people it serves to purchase their own food at nearby markets. However, when WFP needs to rely on external food supplies (e.g., when markets are disrupted by conflict or when the country has a significant food deficit), the upstream lead time is considerable (often up to several months), in particular for landlocked countries such as Chad and South Sudan.
            </Typography>
            <Typography variant="caption">
              Source: Peters, K., Silva, S., Wolter, T. S., Anjos, L., van Ettekoven, N., Combette, É., Melchiori, A., Fleuren, H., den Hertog, D., & Ergun, Ö. (2022). UN World Food Programme: Toward zero hunger with analytics. INFORMS Journal on Applied Analytics, 52(1), 8–26. https://doi.org/10.1287/inte.2021.1097 
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="call-to-action">
        <Typography variant="h2" align="center">
          <span> There needs to be a solution. We encourage you to write your representatives with the following requests: </span>
        </Typography>
      </div>

      <div className="request-list">
        <Paper>
          <List sx={{ bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LooksOne />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Provide modern agricultural equipment to developing nations and train locals in their usage."/>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LooksTwo />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Provide the best genetic profiles of high yield, nutritious crops."/>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Looks3 />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Introduce modern irrigation techniques to areas that are not yet utilizing them."/>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Looks4 />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Allocate fertilizer materials (such as gypsum and dolomite) to farmers in developing nations."/>
            </ListItem>
          </List>
        </Paper>
      </div>

      <div className="democracy-io-link">
        <Button 
          href="https://democracy.io"
          target="_blank"
          size="large" 
          variant="contained" 
          color="success" 
          startIcon={<Create />}>
          Write a Letter to Your Representatives
        </Button>
      </div>
    </div>
  );
}

export default App;
