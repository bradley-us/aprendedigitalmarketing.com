import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Selecciona la configuración de la campaña',
    description: `Para cada campaña publicitaria que cree, puede controlar cuánto está dispuesto a gastar en clics y conversiones, en qué redes y ubicaciones geográficas desea que se muestren sus anuncios, y más.`,
  },
  {
    label: 'Crea un grupo de anuncios',
    description:
      'Un grupo de anuncios contiene uno o más anuncios que se orientan a un conjunto compartido de palabras clave.',
  },
  {
    label: 'Crea un anuncio',
    description: `Pruebe diferentes textos de anuncios para ver qué atrae a la mayoría de los clientes,
    y aprenda a mejorar sus anuncios con funciones como las extensiones de anuncios.
    Si tiene algún problema con sus anuncios, descubra cómo saber si
    se están ejecutando y cómo resolver los problemas de aprobación.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Último paso</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className='bg-[#0098ED]'
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Terminar' : 'Continuar'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Atrás
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>¡Muy bien! ¡Ya completaste los pasos!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Hacerlo de nuevo
          </Button>
        </Paper>
      )}
    </Box>
  );
}