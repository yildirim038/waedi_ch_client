import { useEffect, useState } from "react";
import { getAdvertData, getAdvertDataById, updateAdvert } from "../../services/advertService";
import { AdvertUpdateType } from "../../type/advertType";

type UpdateAdvertType = {
  clickId: string;
  closeModal: () => void;
  setAdvertData: React.Dispatch<React.SetStateAction<any>>;
  returnAllAdvert: () => void;
};

const UpdateAdvert: React.FC<UpdateAdvertType> = ({ clickId, closeModal, setAdvertData, returnAllAdvert }) => {
  const [values, setValue] = useState<AdvertUpdateType>({
    id: "",
    name: "",
    email: "",
    publish: false,
    adresse: "Schmidgass 2",
    plz: 8820,
    ort: "Wädenswil",
    image: null,
    link: "https://",
    advertPage: "",
    advertType: "",
  });

  useEffect(() => {
    getAdvertDataById(setValue, clickId);
  }, [clickId]);

  const handleUpdateAdvert = async () => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("publish", values.publish.toString());
      formData.append("adresse", values.adresse);
      formData.append("plz", values.plz.toString());
      formData.append("ort", values.ort);
      formData.append("link", values.link);
      formData.append("image", values.image || "");
      formData.append("advertPage", values.advertPage);
      formData.append("advertType", values.advertType);
      await updateAdvert(formData, clickId);
      getAdvertData(setAdvertData);
      returnAllAdvert();
      closeModal();
    } catch (error) {
      alert("Event could not be added.");
    }
  };

  return (
    <>
      <div className="form-main-container">
        <div className="add-event-container">
          <h2>Neuen Werbung erstellen</h2>
          <div className="add-event-input-container">
            <div className="event-input-element">
              <label>Firma Name</label>
              <input
                type="text"
                value={values.name}
                onChange={(e) => setValue({ ...values, name: e.target.value })}
              />
            </div>
            <div className="event-input-element">
              <label>Email</label>
              <input
                type="email"
                value={values.email}
                onChange={(e) => setValue({ ...values, email: e.target.value })}
              />
            </div>
            <div className="event-input-element">
              <label>Adresse</label>
              <input
                type="text"
                value={values.adresse}
                onChange={(e) => setValue({ ...values, adresse: e.target.value })}
              />
            </div>
            <div className="event-input-element">
              <label>PLZ</label>
              <input
                type="number"
                value={values.plz}
                onChange={(e) =>
                  setValue({ ...values, plz: parseInt(e.target.value, 10) })
                }
              />
            </div>
            <div className="event-input-element">
              <label>Ort</label>
              <input
                type="text"
                value={values.ort}
                onChange={(e) => setValue({ ...values, ort: e.target.value })}
              />
            </div>
            <div className="event-input-element">
              <label>Advert Page</label>
              <select
                value={values.advertPage}
                onChange={(e) =>
                  setValue({ ...values, advertPage: e.target.value })
                }
              >
                <option value="" disabled>Select a page</option>
                <option value="home">Home</option>
                <option value="directory">Directory</option>
                <option value="events">Events</option>
                <option value="gallery">Gallery</option>
                <option value="interview">Interview</option>
              </select>
            </div>
            <div className="event-input-element">
              <label>Advert Type</label>
              <select
                value={values.advertType}
                onChange={(e) =>
                  setValue({ ...values, advertType: e.target.value })
                }
              >
                <option value="" disabled>Select a type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
            </div>
            <div className="event-input-element">
              <label>Publish</label>
              <select
                value={values.publish ? "true" : "false"}
                onChange={(e) =>
                  setValue({ ...values, publish: e.target.value === "true" })
                }
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="event-input-element">
              <label>Website</label>
              <input
                type="text"
                value={values.link}
                onChange={(e) => setValue({ ...values, link: e.target.value })}
              />
            </div>
            <div className="event-input-element">
              <label>Image:</label>
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setValue({
                      ...values,
                      image: e.target.files[0],
                    });
                  }
                }}
              />
            </div>
          </div>
          <button className="form-button" onClick={handleUpdateAdvert}>
            Update Werbung
          </button>
          <button className="form-button form-close-button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateAdvert;
