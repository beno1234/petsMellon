import Header from "../../components/Header/Header";
import produtos from './Produtos.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from "@mui/material";
import image1 from '../../assets/images/home.png'



export function Produtos() {
    return (
        <>
            <Header whiteVersion colorWhite={false} />
            <section className={`${produtos.section} ${produtos.gradient_bg}`}>
                <div className={`${produtos.breadcrumb_area} text-light text-center`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1>Nossos produtos</h1>
                                <h5>Atuando com copacker na fabricação de alimentos para animais, oferecemos soluções de altíssima qualidade para os nossos parceiros.</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className={`${produtos.section}`}>
                <div className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className={`${produtos.single_item} col-lg-4`}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={image1}
                                            alt="green iguana"
                                        >
                                        </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className={`${produtos.single_item} col-lg-4`}>

                            </div>
                            <div className={`${produtos.single_item} col-lg-4`}>

                            </div>
                            <div className={`${produtos.single_item} col-lg-4`}>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    )

}