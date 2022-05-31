import corporla from "../assets/images/corporal.png"
import facial from "../assets/images/facial.png"
import deportivo from "../assets/images/deportivo.png"
import reset from "../assets/images/reset.png"
import corpoReset from "../assets/images/corporal+reflex.png"


export const terapias = [
{
    id: 1,
    imageTerapia: deportivo,
    tipo: "Terapia Deportiva",
    descripcion: "Terapia enfocada en los puntos de mayor esfuerzo, enfocado en personas que gustan de actividades físicas exigentes",
    precio:" $ 600.00",
    duracion:"60 min."
},
{
    id: 2,
    tipo: "Terapia Corporal",
    imageTerapia:corporla,
    descripcion: "Terapia enfocada al cuerpo en general, diseñada para localizar las partes mas afectadas y restaurar la paz",
    precio:" $ 600.00 / $ 800.00",
    duracion:"60 / 90 min."
},
{
    id: 3,
    tipo: "Terapia Facial",
    imageTerapia: facial,
    descripcion: "Terapia enfocada al cuerpo en general, diseñada para localizar las partes mas afectadas y restaurar la paz",
    precio:" $ 600.00 / $ 800.00",
    duracion:"60 / 90 min."
},
{
    id: 4,
    tipo: "Terapia Reset",
    imageTerapia: reset,
    descripcion: "Terapia enfocada al cuerpo en general, diseñada para localizar las partes mas afectadas y restaurar la paz",
    precio:" $ 600.00 / $ 800.00",
    duracion:"60 / 90 min."
},
{
    id: 5,
    tipo: "Terapia Corporal + Reset",
    imageTerapia: corpoReset,
    descripcion: "Terapia enfocada al cuerpo en general, diseñada para localizar las partes mas afectadas y restaurar la paz",
    precio:" $ 600.00 / $ 800.00",
    duracion:"60 / 90 min."
}
]