import React,{Component} from 'react'

class List extends Component{
    render() {
        const {items,removeItem,toggleItem} = this.props
        return (
            <div>
                {items&&items.map((item)=>
                    <li key={item.id}>
                        <span style={{textDecorationLine: item.complete ? 'line-through':'none'}} onClick={()=>toggleItem&&toggleItem(item.id)}>{item.name}</span>
                        <button onClick={()=>removeItem(item)}>X</button>
                    </li>
                )}
            </div>
        );
    }
}

export default List