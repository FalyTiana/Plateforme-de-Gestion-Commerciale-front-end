// pricingSlice.js
const initialState = {
    pricingPlans: [
      {
        id: 1,
        planName: 'Basic Plan',
        price: '0 Ar',
        features: ['Fonctionnalités principales', "Envoi d'email"],
      },
      {
        id: 2,
        planName: 'Gold Plan',
        price: '10k Ar',
        features: ['Fonctionnalités principales', "Envoi d'email", 'Réseaux sociaux Meta'],
      },
      {
        id: 3,
        planName: 'Diamond Plan',
        price: '100k Ar',
        features: ['Fonctionnalités principales', "Envoi d'email", 'Réseaux sociaux Meta', 'ChatBot', 'Analyse de données par IA'],
      },
    ]
  };
  
  const pricingReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default pricingReducer;
  