import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TabDetail() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const eachMatch = () => {
    window.location.href = "/bts/eachMatch";
  }

  return (
    <div className="betsAccordion">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >General settings
        </AccordionSummary>
        <AccordionDetails>
        <div className="each-ac-detail" onClick={eachMatch}>
        <Typography>
            Brasilerio Serie A
          </Typography>
          <span className="numberBadge">
            1
        </span>
        </div>
        <div className="each-ac-detail" onClick={eachMatch}>
        <Typography>
            Brasilerio Serie A
          </Typography>
          <span className="numberBadge">
            1
        </span>
        </div>
        <div className="each-ac-detail" onClick={eachMatch}>
        <Typography>
            Brasilerio Serie A
          </Typography>
          <span className="numberBadge">
            1
        </span>
        </div>
        <div className="each-ac-detail" onClick={eachMatch}>
        <Typography>
            Brasilerio Serie A
          </Typography>
          <span className="numberBadge">
            1
        </span>
        </div>
        <div className="each-ac-detail" onClick={eachMatch}>
        <Typography>
            Brasilerio Serie A
          </Typography>
          <span className="numberBadge">
            1
        </span>
        </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>Users</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
            Advanced settings
       
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
