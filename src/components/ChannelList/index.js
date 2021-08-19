import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CHANNELS_REQUESTED, GET_PROGRAMS_REQUESTED } from "../../redux/actions";

function ChannelList(){
    const [channels, currentXvid] = useSelector(store => [
        store.channels,
        store.currentXvid
    ]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: GET_CHANNELS_REQUESTED});
    }, []);

    const handleClick = (event) => {
        if(event.target.dataset.xvid !== currentXvid){
            dispatch({type: GET_PROGRAMS_REQUESTED, payload: { 
                xvid:  event.target.dataset.xvid} 
            })
        }
    }

    return(
        <div className="col-6">
            <div className="block__title">Выберите один из каналов</div>
            <ul className="block_list">
                {channels.map((elem) => 
                    <li className={`block_list__item channels ${currentXvid === elem.xvid ? "active" : ""}`} onClick={handleClick} data-xvid={elem.xvid} key={elem.chid}>{elem.title}</li>
                )}
            </ul>
        </div>
    )
}

export default ChannelList;
