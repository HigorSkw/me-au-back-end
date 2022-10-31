import { Request, Response } from "express";
import userDeleteService from "../../services/users/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
	const { id } = req.params;
	await userDeleteService(id);
	return res.status(204).send();
};

export default userDeleteController;
