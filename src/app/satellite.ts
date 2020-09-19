export class Satellite {
    
    name: string;
    orbitType: string;
    type:string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        /* assign class properties in the constructor 5a and b*/
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
        /*
        function shouldShowWarning(): boolean{
            if (this.type === 'Space Debris'){
                return true;
            } else if (this.type !== 'Space Debris'){
                return false;
            }
        }
        let showWarning: boolean = (shouldShowWarning(this.type) === true);*/
    }
    
    
    
}
