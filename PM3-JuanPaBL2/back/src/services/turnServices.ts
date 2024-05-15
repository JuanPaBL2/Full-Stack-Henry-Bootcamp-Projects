//import { ITurn, IUser } from "../interfaces/interfaz";
import { TurnDto, UserDto } from "../interfacesDtos/user&nameDto";
import { UserModel, turnModel } from "../config/userDataSource";
import { Turn } from "../entidades/turnEntity";
import { User } from "../entidades/userEntity";


export const createTurnService = async (turnData: TurnDto): Promise<Turn>  => {
    //user model tiene turns: Turns
    const user = await UserModel.findOne({ where: { id: turnData.id } }); // Usar userId para buscar el usuario
 
    if (!user) {
        throw new Error(`No se encontró un usuario con el ID: ${turnData.id}`);
    }
 
    const turn = await turnModel.create({
        date: turnData.date,
        time: turnData.time,
        status: "active",
        user: user
    });
 
    await turnModel.save(turn);
    return turn;
 
 }

//REVISAR ESTE SERVICIO: error al solicitar put en NaN
export const cancelTurnService = async (id: number): Promise<Turn | null> => {
    const turn: Turn | null = await turnModel.findOneBy({id});

    if (!turn) {
        throw new Error(`No se encontró un turno con el ID: ${id}`);
    }
   
    // Cambiar el estado del turno a "cancelled"
    turn.status = "cancelled";

    // Guardar el turno actualizado en la base de datos
    await turnModel.save(turn);

    return turn;
}


export const getAllTurnsService = async (): Promise<Turn[]> => {
    const turns = await turnModel.find(); // Busca todos los turnos en la base de datos
    return turns; // Retorna el arreglo de turnos
}


export const getTurnByIdService = async (id: number): Promise<Turn | null> => {
    const turn: Turn | null = await turnModel.findOne({ where: {id}, relations: ['user']  });
    if (turn) {
        return {
            id: turn.id,
            date: turn.date,
            time: turn.time,
            user: turn.user, // Asumiendo que 'userId' está en 'turn'
            status: turn.status
        };
    }
    return null;
}
