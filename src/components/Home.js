import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


export default function Home() {
    const [value, setValue] = React.useState(2);
    const buttons = [
        <Button key="one">One</Button>,
        <Button key="two">Two</Button>,
        <Button key="three">Three</Button>,
      ];
  return (
    <>
<div className='container'>
    <div className='row text-center'>
        <div className='col-md-6'>
            <h4>Horizontal Button Groups</h4>
            <ButtonGroup variant='contained'>
            {buttons}
            </ButtonGroup>

            <hr/>
            <ButtonGroup variant='contained' color='error'>
            {buttons}
            </ButtonGroup>
            <hr/>
            <ButtonGroup variant='text' size='large'>
            {buttons}
            </ButtonGroup>
           <hr/>
            <h4>vertical button groups</h4>
            <ButtonGroup orientation='vertical' variant='text' color='error' size='large'>
            {buttons}
            </ButtonGroup>
            <ButtonGroup orientation='vertical' variant='text' color='secondary' size='large'>
            {buttons}
            </ButtonGroup>
            <ButtonGroup orientation='vertical' variant='text' color='primary' size='large'>
            {buttons}
            </ButtonGroup>
        
        </div>
        <div className='col-md-6'>
            
            <h4>Check boxes</h4><br/>
            <FormGroup className='d-flex align-content-center'>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
    <hr/>
    <h4>Radio Group</h4>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>

    <hr/>
    <h4>Rating</h4>
    <div>
        <div>
    <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </div>
      <div>
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      </div>
      <div>
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      </div>
      <div>
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
      </div>
        </div>
        </div>
    </div>
</div>





    </>
  )
}
