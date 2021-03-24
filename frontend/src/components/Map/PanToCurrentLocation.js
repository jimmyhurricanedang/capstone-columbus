import GpsFixedTwoToneIcon from '@material-ui/icons/GpsFixedTwoTone';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components/macro";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        position: 'sticky'
    },
});

// re-center to original user position
export default function PanToCurrentLocation({panTo}) {
    return (
        <PantoIcon>
            <IconButton
                variant="contained"
                color="primary"
                onClick={() => {
                    // if user's browser allows it, get user's position and re-center to it
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            panTo({
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            })
                        }, () => null)
                }}>
                <GpsFixedTwoToneIcon size="large"/>
            </IconButton>
        </PantoIcon>
    )
}


const PantoIcon = styled.div`
    display: grid;
    justify-content: flex-end;
 `;




