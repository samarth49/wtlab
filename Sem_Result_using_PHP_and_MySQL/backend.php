    <?php
        $host = "localhost";
        $username = "root";
        $password = "";
        $db = "student_marks";

        $conn = mysqli_connect($host, $username, $password, $db);
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }


        $data = json_decode(file_get_contents("php://input"),true);

        $stmt = $conn->prepare("INSERT INTO students (name, roll_no) VALUES (?,?)");
        $stmt->bind_param("ss",$data["name"],$data["roll_no"]);
        $stmt->execute();
        $student_id = $stmt->insert_id;

        $stmt = $conn->prepare("INSERT INTO mse (student_id, subject1, subject2, subject3, subject4) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("iiiii", $student_id, $data["mse1"], $data["mse2"], $data["mse3"], $data["mse4"]);
        $stmt->execute();

        $stmt = $conn->prepare("INSERT INTO ese (student_id, subject1, subject2, subject3, subject4) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("iiiii", $student_id, $data["ese1"], $data["ese2"], $data["ese3"], $data["ese4"]);
        $stmt->execute();

        $totals = [];
        for ($i = 1; $i <= 4; $i++) {
            $mse = (int)$data["mse$i"];
            $ese = (int)$data["ese$i"];
            $total = $mse + $ese;
            $totals[] = round($total, 2);
        }

        echo "<h5>Final Marks (30% MSE + 70% ESE)</h5><ul>";
        for ($i = 0; $i < 4; $i++) {
            echo "<li>Subject " . ($i+1) . ": " . $totals[$i] . "/100</li>";
        }
        echo "</ul>";
    ?>