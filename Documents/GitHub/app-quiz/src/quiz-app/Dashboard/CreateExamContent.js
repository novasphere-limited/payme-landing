// import { ROUTES } from "@/constants/ROUTES";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import { GenderList } from "../../constants";
import Button from "../../components/Button";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { useState } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export default function CreateExamContent() {
  const { handleSubmit, control } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <DashboardLayout>
      <div className="mb-[20px] flex items-center gap-2">
        <img
          src="/assets/favicon_io/quiz-arrow_left.svg"
          width={10}
          height={11.67}
          alt="Back arrow icon"
        />
        <h6 className="text-[#FD9933]">BACK</h6>
      </div>
      <h6 className="header-5 mb-2">Create Exam</h6>
      <p className="subtitle-2 mb-[20px]">
        Create assessment test for your students
      </p>

      <div className="bg-white rounded-lg p-6 flex justify-center">
        <div style={{ maxWidth: "768px" }} className="log-container bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="p-5">
            <div className="flex gap-5">
              <div className="w-full">
                <CustomInput
                  label="First Name"
                  placeholder="Kehinde"
                  type="text"
                  name="firstname"
                  rules={{
                    required: "Firstname is required",
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3 characters",
                    },
                  }}
                  control={control}
                />
              </div>
              <div className="w-full">
                <CustomInput
                  label="Last Name"
                  placeholder="Jejelaye"
                  type="text"
                  name="lastname"
                  rules={{
                    required: "Lastname is required",
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3 characters",
                    },
                  }}
                  control={control}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-full">
                <CustomInput
                  label="Exam name/code"
                  placeholder="phs101"
                  type="text"
                  name="examname"
                  rules={{
                    required: "Examname is required",
                    minLength: {
                      value: 3,
                      message: "Minimum length is 3 characters",
                    },
                  }}
                  control={control}
                />
              </div>
              <div className="w-full">
                <CustomInput
                  label="Subject"
                  placeholder="Physics"
                  type="text"
                  name="subject"
                  rules={{
                    required: "Subject is required",
                    minLength: {
                      value: 3,
                      message: "Subject field is required",
                    },
                  }}
                  control={control}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-full">
                <CustomInput
                  label="Exam Type"
                  type="select"
                  name="examType"
                  control={control}
                  options={GenderList}
                />
              </div>
              <div className="w-full">
                <CustomInput
                  label="Duration"
                  type="select"
                  name="duration"
                  control={control}
                  options={GenderList}
                />
              </div>
            </div>
            <CustomInput
              label="Name of Institution"
              placeholder="Unilag"
              type="text"
              name="institution"
              rules={{
                required: "Institution is required",
                pattern: {
                  value: 3,
                  message: "Institution field is required.",
                },
              }}
              control={control}
            />
            <CustomInput
              label="Number of Questions"
              placeholder="30"
              type="text"
              name="questions"
              rules={{
                required: "Question field is required",
                pattern: {
                  value: 3,
                  message: "Question field is required.",
                },
              }}
              control={control}
            />
            <CustomInput
              label="Additional Information"
              placeholder="..."
              type="text"
              name="additionalInfo"
              rules={{
                required: "Additional information is required",
                pattern: {
                  value: 3,
                  message: "Information field is required.",
                },
              }}
              control={control}
            />
            <CustomInput
              label="Upload file"
              type="file"
              name="file"
              setSelectedFile={setSelectedFile}
              rules={{
                required: "File must be uploaded",
                pattern: {
                  message: "File needs to be uploaded is required.",
                },
              }}
              control={control}
              icon={PictureAsPdfIcon}
            />
            <p>{selectedFile?.name}</p>
            <div className="px-10">
              <Button
                text="Submit"
                type="submit"
                classname="w-1/4 rounded-lg text-white p-3 bg-[#000080]"
              />
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
