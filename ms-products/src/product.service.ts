import { outputLoginProductDTO, outputByIdProductDTO} from './dto'
import prodct from "./utils/products.schemas";



// Función para loggear un producto
export const loginProductInDb = async ( owner: string, clav_prodct: string):Promise<outputLoginProductDTO> => {
  try {
      const objectOwner = await prodct
  .findOne({
    owner,
    clav_prodct
  })
  .exec();
  if (!objectOwner) {
    return {id:'owner no found', stat:false}
  }
  return {id:objectOwner._id.toString(), stat:objectOwner.stat}
  } catch (error) {
    console.error("Object owner was'nt find");
    return {id:`${error}`, stat:false}
  }

};

// Función para obtener un producto por ID
export const getProductById = async (id: string):Promise<outputByIdProductDTO> => {
  try {
    const objectOwner = await prodct
.findById(id)
.exec();
if (!objectOwner) {
  return {owner:'owner no found', stat:false}
}
return {owner:objectOwner.owner, stat:objectOwner.stat}
} catch (error) {
  console.error("Object owner was'nt find");
  return {owner:`${error}`, stat:false}
}
};

