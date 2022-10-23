import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';


const ContainerCards = ({ data }: any) => {

    if (!data) return null;
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

            {data.map((digimon: any) => (
                    <Card key={digimon.cardnumber} sx={{ maxWidth: 345 }}
                        style={{ marginLeft: '1em', marginBottom: '1em', padding: '0.5em', border: '1px solid black' }}>
                        <CardActionArea href={digimon?.image_url} target={'_blank'}>
                            <CardMedia
                                component="img"
                                height="500"
                                image={digimon?.image_url}
                                alt={digimon?.name}
                            />
                            <CardContent>
                                <Typography variant='h4'>
                                    {digimon?.name}
                                </Typography>
                                <Typography variant='h5'>{digimon?.cardnumber}</Typography>
                                <Typography variant='h5'>
                                    {digimon?.cardrarity}
                                </Typography>
                                <Typography variant='h5'>{digimon?.type}</Typography>
                            </CardContent>
                            {/* <Typography>{JSON.stringify(digimon)}</Typography> */}
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Show More
                            </Button>
                        </CardActions>
                    </Card>
            ))}
        </div>
    )
}

export default ContainerCards;