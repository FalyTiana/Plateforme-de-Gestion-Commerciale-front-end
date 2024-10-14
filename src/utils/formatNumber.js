export const formatNumber = (num) => {
    return new Intl.NumberFormat('fr-FR').format(num);
};
