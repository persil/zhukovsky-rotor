/**
 * Calculate the rotor thrust possible to achieve based on given rotor diameter and power available [N]
 * 
 * @param diameter Rotor diameter [m]
 * @param power Power available at given air pressure [W]
 * @param airDensity [kg/m3]
 * @param figureOfMerit Figure of merit of a rotor (0 < figure of merit < 1)
  */
export const calculateRotorThrust = (diameter: number, power: number, airDensity: number, figureOfMerit: number): number => {
    return (diameter * power * figureOfMerit * ((airDensity * Math.PI / 2) ** (1 / 2))) ** (2 / 3);
}

/**
 * Calculate the rotor diameter required to obtain given thrust at given power consumed [m]
 * 
 * @param thrust Thrust to be produced (i.e. helicopter gross weight) [N]
 * @param power Power available at given air pressure [W]
 * @param airDensity [kg/m3]
 * @param figureOfMerit Figure of merit of a rotor (0 < figure of merit < 1)
  */
export const calculateRotorDiameter = (thrust: number, power: number, airDensity: number, figureOfMerit: number): number => {
    return thrust ** (3 / 2) / figureOfMerit / power / ((airDensity * Math.PI / 2) ** (1 / 2))
}

/**
 * Calculate the required power, which needs to be delivered to rotor, in order to achieve given thrust with given rotor diameter [W]
 * 
 * @param thrust Thrust to be produced (i.e. helicopter gross weight) [N]
 * @param diameter Rotor diameter [m]
 * @param airDensity [kg/m3]
 * @param figureOfMerit Figure of merit of a rotor (0 < figure of merit < 1)
  */
export const calculateRotorPower = (thrust: number, diameter: number, airDensity: number, figureOfMerit: number): number => {
    return thrust ** (3 / 2) / figureOfMerit / diameter / ((airDensity * Math.PI / 2) ** (1 / 2))
}