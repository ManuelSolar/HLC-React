import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: ''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					if(!valores.pais){
						errores.pais = 'Por favor selecciona un pais'
					}

					if(!valores.sexo){
						errores.sexo = 'Por favor selecciona un sexo'
					}

					if(!valores.mensaje){
						errores.mensaje = 'Por favor ingresa una descripcion'
					}else if(!/^[a-zA-ZÀ-ÿ\s]{1,140}$/.test(valores.mensaje)){
						errores.mensaje = 'La descripcion solo puede contener letras y espacios y no puede superar los 300 caracteres'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
						<div>
							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="Nombre"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

						<div>
							<label htmlFor="pais">Pais</label>
							<Field name="pais" as="select">
								<option value="mexico">Mexico</option>
								<option value="España">España</option>
								<option value="Argentina">Argentina</option>
								<option value="Argentina">Italia</option>
								<option value="Argentina">Francia</option>
								<option value="Argentina">Perú</option>
								<option value="Argentina">Alemania</option>
							</Field>
							<ErrorMessage name="pais" component={() => (<div className="error">{errors.pais}</div>)} />
						</div>

						<div>
							<label>
								<Field type="radio" name="sexo" value="hombre" /> Hombre
							</label>
							<label>
								<Field type="radio" name="sexo" value="mujer" /> Mujer
							</label>
							<ErrorMessage name="sexo" component={() => (<div className="error">{errors.sexo}</div>)} />
						</div>

						<div>
						<label htmlFor="mensaje">Descripción</label>
							<Field name="mensaje" as="textarea" placeholder="Descripción" />
							<ErrorMessage name="mensaje" component={() => (<div className="error">{errors.mensaje}</div>)} />
						</div>

						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
		</Formik>
			
		</>
	);
}
 
export default Formulario;