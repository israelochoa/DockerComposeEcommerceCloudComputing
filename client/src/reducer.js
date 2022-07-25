
export const initialState={
    basket:[],
    user:null,
};
export const getBasketTotal=(basket)=>
    basket.reduce((amount, item) =>  item.price+amount,0);

const reducer=(state, action)=>{
    console.log('actioooon');
    
    console.log(action);

    switch (action.type) {
        case 'ADD_TO_BASKET':
          return {
            
            basket:[...state.basket,action.item],
        };
        case 'REMOVE_FROM_BASKET':
            const index=state.basket.findIndex(
                (basketItem)=> basketItem.id===action.id
            );
            console.log('index',index)
            let newBasket=[...state.basket];
            console.log('-----newBasket', newBasket) 
            if(index>=0){
                newBasket.splice(index,1);
            }else{
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!` );
            }
            console.log('newBasket-----', newBasket)
            
          return {
            ...state,
            basket:newBasket,
          };
        case 'ADD_USER':
            console.log('userr>>>',action.user);
            return{
                ...state,
                user:action.user
            };
        default:
          return state;
      
    }
};
export default reducer;