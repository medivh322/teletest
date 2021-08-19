import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_CHANNELS, API_PROGRAMS } from "../../constants";
import { getChannels, getPrograms } from "../../redux/actions_creators";

function ChannelList(){
    const [channels, currentXvid] = useSelector(store => [
        store.channels,
        store.currentXvid
    ]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`${API_CHANNELS}channel/list?domain=kazan`)
          .then(response => response.json())
          .then(data => {
            dispatch(getChannels(data));
          })
    }, [])

    const handleClick = (event) => {
        fetch(`${API_PROGRAMS}list?domain=kazan&date_from=2021-08-18&date_to=2021-08-25&xvid=${event.target.dataset.xvid}`)
        .then(response => response.json())
        .then(data => {
            dispatch(getPrograms(data[event.target.dataset.xvid], event.target.dataset.xvid));
        })
    }

    return(
        <div className="col-6">
            <div className="block__title">Выберите один из каналов</div>
            <ul className="block_list">
                {channels.map((elem) => 
                    <li className={`block_list__item channels ${currentXvid == elem.xvid ? "active" : ""}`} onClick={handleClick} data-xvid={elem.xvid} key={elem.chid}>{elem.title}</li>
                )}
            </ul>
        </div>
    )
}

export default ChannelList;
