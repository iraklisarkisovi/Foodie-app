
'use client'
import { useRef, useState, ChangeEvent } from "react"
import classes from "./Image-picker.module.css"
import Image from "next/image";

type ImagePickerProps = {
    name: string;
    label: string;
}

export default function ImagePicker({ name, label }: ImagePickerProps) {
    const imageInput = useRef<HTMLInputElement | null>(null);
    const [pickedImage, setPickedImage] = useState<string | null>(null);

    const handlePickClick = () => {
        if (!imageInput.current) return;
        imageInput.current.click();
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            if (typeof fileReader.result === "string") {
                setPickedImage(fileReader.result);
            }
        };
        fileReader.readAsDataURL(file);
    };

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.conrols}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt="Selected" fill />}
                </div>
                <input
                    type="file"
                    className={classes.input}
                    id={name}
                    name={name}
                    ref={imageInput}
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                />
                <button
                    type="button"
                    className={classes.button}
                    onClick={handlePickClick}
                >
                    Pick Image
                </button>
            </div>
        </div>
    )
}