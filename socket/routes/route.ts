import {Router, Request, Response} from 'express';

 export const router = Router();

router.get('/mensajes', (req:Request, res:Response)=>{
    res.json({
        ok:true,
        mensaje:'todo esta bien!!'
    });

    


    
});


router.post('/mensajes/:id', (req:Request, res:Response)=>{
   
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const id = req.params.id;

    res.json({
        nombre,
        apellido,
        id
    });

});