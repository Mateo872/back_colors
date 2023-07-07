import Color from "../model/color";

export const getColors = async (req, res) => {
  try {
    const colors = await Color.find();
    res.status(200).json(colors);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al buscar los colores.",
    });
  }
};

export const getColor = async (req, res) => {
  try {
    const color = await Color.findById(req.params.id);
    res.status(200).json(color);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al buscar el color.",
    });
  }
};

export const createColor = async (req, res) => {
  try {
    const newColor = new Color(req.body);
    await newColor.save();
    res.status(201).json({
      mensaje: `El color '${newColor.colorName}' fue creado exitosamente.`,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al crear el color.",
    });
  }
};

export const deleteColor = async (req, res) => {
  try {
    await Color.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: `El color fue eliminado exitosamente.`,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al eliminar el color.",
    });
  }
};

export const editColor = async (req, res) => {
  try {
    await Color.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: `El color fue editado exitosamente.`,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Se produjo un error al editar el color.",
    });
  }
};
