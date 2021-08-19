import { useSelector } from "react-redux";

function ChannelProgram(){
    const programs = useSelector(store => store.programs);

    function programsGroup(date, duration){
        let a = new Date().getTime();
        let b = new Date(date).getTime();
        let mill = Number(duration)*1000;
        let style = "";
        if (a > b && a < b + mill){
            style = "current";
        }else if(a > b && a > b + mill){
            style = "past";
        }else{
            style = "future";
        }
        return style;
    }

    return(
        <div className="col-6">
            <div className="block__title">Список передач</div>
                {(programs.length) 
                    ? 
                    <ul className="block_list programs">
                        {programs.map((elem) => 
                            <li className={"block_list__li " + programsGroup(elem.start, elem.duration)} key={elem.start}><p className="block_list__date">{elem.start}</p><p className="block_list__title">{elem.title}</p></li>
                        )}
                    </ul>
                    : "Вы не выбрали канал"
                }
        </div>
    )
}

export default ChannelProgram;