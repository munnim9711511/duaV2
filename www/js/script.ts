 export class script {
    dua_1: number = 0;
    dua_2: number = 0;
    dua_3: number = 0;
    dua_4: number = 0;
    dua_5: number = 0;
    dua_6: number = 0;
    dua_7: number = 0;
    dua_8: number = 0;


    addNumber(num: number): void {
        switch (num) {
            case 1:
                this.dua_1 += 1;
                break;
            case 2:
                this.dua_2 += 1;
                break;
            case 3:
                this.dua_3 += 1;
                break;
            case 4:
                this.dua_4 += 1;
                break;
            case 5:
                this.dua_5 += 1;
                break;
            case 6:
                this.dua_6 += 1;
                break;
            case 7:
                this.dua_7 += 1;
                break;
            case 8:
                this.dua_8 += 1;
                break;
            default:
                break;
        }
    }


}