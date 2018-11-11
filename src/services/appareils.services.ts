import { Appareil } from './../models/Appareil';
export class AppareilsService{

    appareilsList:Appareil[] = [
        {
          name: "Laundry Machine",
          description: [
            'dexript 1 ',
            'Dessscription 2'
          ],
          isOn:true
        },
        {
          name: "Television ",
          description: [
            'dexript 3 ',
            'Dessscription 4'
          ],
          isOn:false,
        },
        {
          name: "Ordinateur",
          description: [
            'dexript 5 ',
            'Dessscription 6'
          ],
          isOn:false,
        }
      ];
}