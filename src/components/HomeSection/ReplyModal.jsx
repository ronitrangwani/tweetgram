import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import ImageIcon from "@mui/icons-material/Image";

import { useFormik } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export default function ReplyModal({ handleClose, open }) {
  //   const [open, setOpen] = React.useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      tweetId: 4,
    },
    onSubmit: handleSubmit,
  });

  const handleSelectImage = (e) => {
    setUploadingImage(true);
    const imgUrl = e.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex space-x-5">
            <Avatar
              onClick={() => navigate(`/profile/${6}`)}
              className="cursor-pointer"
              alt="username"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5QX51-SXSdd_3NLB1hK4KR0lQrkoKlPsPRG8f18ODpBbLovPMJ_L9z55JCbBo9TrCduw&usqp=CAU"
            />
            <div className="w-full">
              <div className="flex cursor-pointer items-center space-x-2">
                <span className="font-semibold">Ron Ran</span>
                <span className="text-gray-600">@ronran . 2 min</span>
                <img
                  className="ml-2 w-5 h-5"
                  src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png"
                  alt=""
                />
              </div>
              <div className="mt-2">
                <div
                  className="cursor-pointer"
                  onClick={() => navigate(`/tweet/${3}`)}
                >
                  <p className="mb-2 p-0">Full Stack Clone</p>
                </div>
              </div>
            </div>
          </div>
          <section className="py-10">
            <div className="flex space-x-5">
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5QX51-SXSdd_3NLB1hK4KR0lQrkoKlPsPRG8f18ODpBbLovPMJ_L9z55JCbBo9TrCduw&usqp=CAU"
                alt="username"
              />
              <div className="w-full">
                <form onSubmit={formik.onSubmit}>
                  <div>
                    <input
                      type="text"
                      name="content"
                      placeholder="What is happening"
                      className="border-none outline-none text-xl bg-transparent"
                      {...formik.getFieldProps("content")}
                    />
                    {formik.errors.content && formik.touched.contenr && (
                      <span className="text-red-500">
                        {formik.errors.content}
                      </span>
                    )}
                  </div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex space-x-5 items-center">
                      <label className="flex item-center space-x-2 rounded-md cursor-pointer">
                        <ImageIcon className="text-[#1d9bf0]" />
                        <input
                          type="file"
                          name="imageFile"
                          className="hidden"
                          onChange={handleSelectImage}
                        />
                      </label>
                      <FmdGoodIcon className="text-[#1d9bf0]" />
                      <TagFacesIcon className="text-[#1d9bf0]" />
                    </div>
                    <div>
                      <Button
                        sx={{
                          width: "50%",
                          borderRadius: "20px",
                          py: "8px",
                          px: "20px",
                          bgcolor: "#1e88e5",
                        }}
                        variant="contained"
                        type="submit"
                      >
                        Tweet
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}
