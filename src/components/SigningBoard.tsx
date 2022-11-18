import { FolderArrowDownIcon, TrashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";

interface SigningBoardProps {
    onSign?: (signature: string) => void;
    onClear?: () => void;
    width: number;
    height: number;
    data?: string;
}

type Coordinate = {
    x: number;
    y: number;
}

const SigningBoard: React.FunctionComponent<SigningBoardProps> = ({ width, height }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined);

    const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
        if (!canvasRef.current) {
            return;
        }
        const canvas: HTMLCanvasElement = canvasRef.current;
        return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
    }

    const startDrawing = useCallback((event: MouseEvent) => {
        const coordinates = getCoordinates(event);
        if (coordinates) {
            setIsDrawing(true);
            setMousePosition(coordinates);
            setIsEmpty(false);
        }
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener("mousedown", startDrawing);

        return () => {
            canvas.removeEventListener("mousedown", startDrawing);
        }
    }, [startDrawing]);

    const paint = useCallback((event: MouseEvent) => {
        if (isDrawing) {
            const newMousePosition = getCoordinates(event);
            if (mousePosition && newMousePosition) {
                drawLine(mousePosition, newMousePosition);
                setMousePosition(newMousePosition);
            }
        }
    }, [isDrawing, mousePosition]);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener("mousemove", paint);
        return () => {
            canvas.removeEventListener("mousemove", paint);
        }
    }, [paint]);

    const exitDrawing = useCallback(() => {
        setIsDrawing(false);
        setMousePosition(undefined);
        if (canvasRef.current) {
            const canvas: HTMLCanvasElement = canvasRef.current;
            const data = canvas.toDataURL();
            console.log(data);
        }
    }, []);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas: HTMLCanvasElement = canvasRef.current;
        canvas.addEventListener("mouseup", exitDrawing);
        canvas.addEventListener("mouseleave", exitDrawing);
        return () => {
            canvas.removeEventListener("mouseup", exitDrawing);
            canvas.removeEventListener("mouseleave", exitDrawing);
        }
    }, [exitDrawing]);

    const drawLine = (originalMousePosition: Coordinate, newMousePosition: Coordinate) => {
        if (!canvasRef.current) return;
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext("2d");
        if (context) {
            context.strokeStyle = "black";
            context.lineJoin = "round";
            context.lineWidth = 2;
            context.beginPath();
            context.moveTo(originalMousePosition.x, originalMousePosition.y);
            context.lineTo(newMousePosition.x, newMousePosition.y);
            context.closePath();
            context.stroke();
        }
    }

    const clearCanvas = () => {
        if (!canvasRef.current) return;
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext("2d");
        if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            setIsEmpty(true);
        }
    }

    const downloadCanvas = () => {
        if (!canvasRef.current) return;
        const canvas: HTMLCanvasElement = canvasRef.current;
        const data = canvas.toDataURL();
        const link = document.createElement("a");
        link.download = "signature.png";
        link.href = data;
        link.click();
        link.remove();
    }
        



    return <>
        <canvas width={width} height={height} ref={canvasRef} className="border" />
        <button className=" gap-2 flex border p-1" title="Clear signing board" onClick={clearCanvas}>
            <TrashIcon className="h-6 w-6" />
            <span>Clear signing board</span>
        </button>
        <button className={clsx("gap-2 flex border p-1", isEmpty ? "text-gray-400 bg-gray-50" : "")} title="Save Signiture" disabled={isEmpty} onClick={downloadCanvas} >
            <FolderArrowDownIcon className="h-6 w-6" />
            <span>Save Signiture</span>
        </button>
    </>;
}

export default SigningBoard;

