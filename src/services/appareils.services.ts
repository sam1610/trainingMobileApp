import { Appareil } from './../models/Appareil';
export class AppareilsService{

    appareilsList:Appareil[] = [
        {
          name: "Laundry Machine",
          description: [
            'dexript 1 ',
            'Dessscription 2'
          ],
          isOn:true,
          startTime:"",
          endTime:""
        },
        {
          name: "Television ",
          description: [
            'dexript 3 ',
            'Dessscription 4'
          ],
          isOn:false,
          startTime:"",
          endTime:""
        },
        {
          name: "Ordinateur",
          description: [
            'dexript 5 ',
            'Dessscription 6'
          ],
          isOn:false,
          startTime:"",
          endTime:""
        }
      ];
}