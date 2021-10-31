import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import SidebarElement from "../../sidebar/SidebarElement";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../actions";

const LeaveComment = (props) => {
  const commentStatus = useSelector((state) => state.addCommentStatus);
  const postId = useSelector((state) => state.postId);
  const dispatch = useDispatch();
  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    website: Yup.string()
      .min(1, "Website is required.")
      .required("Website is required."),
    body: Yup.string()
      .min(1, "Comment is required.")
      .required("Comment is required."),
  });
  return (
    <div className="mb-5">
      <SidebarElement title="leave a comment">
        <Formik
          initialValues={{
            name: "",
            email: "",
            website: "",
            body: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            dispatch(addComment(postId, values));
          }}
        >
          {(formik) => (
            <div className="" style={{ background: "#fff" }}>
              <div className="row">
                <div className="col-12">
                  <div>
                    <Form>
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <TextField
                            placeholder="Full Name"
                            name="name"
                            type="text"
                          />
                          <TextField
                            placeholder="Email Address"
                            name="email"
                            type="email"
                          />
                          <TextField
                            placeholder="Website"
                            name="website"
                            type="text"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <TextField
                            name="body"
                            type="text"
                            style={{ height: "80px" }}
                          />
                          <button
                            className="btn btn-dark mt-1 w-100"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </Form>
                  </div>
                  {commentStatus && (
                    <h6 className="green-text">Comment added succesfully!</h6>
                  )}
                </div>
              </div>
            </div>
          )}
        </Formik>
      </SidebarElement>
    </div>
  );
};

export default LeaveComment;
