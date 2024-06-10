


const initialSatate={

    profile:{
        name:"hello",
        email:"hello@gmail.com",
        mobile:865556,
        image:null
    }
};


const profileReducer=(state=initialSatate,action)=>{

    switch(action.type){

        case "PROFILE_INFO_CHANGE":
            return{...state,profile:action.payload}
        default:
            return state

    }


};

export default profileReducer;









