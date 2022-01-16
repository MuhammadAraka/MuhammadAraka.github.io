const about = function() {
    const content = document.getElementById("isiContent");
    content.innerHTML = `
    <header>
        <h1>Welcome to My Web</h1>
        <p>ini adalah website pertama saya.</p>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li>|</li>
                <li><a href="about.html">About</a></li>
                <li>|</li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <div id="content">
            <article>
                <h2>About Me</h2>
                <hr>
                <p>Halo!, perkenalkan nama saya M.ARAKA ROJUL HAMIDAN, saya tertarik untuk belajar menjadi web programer, ini merupakan website pertama saya, semoga ini langkah pertama saya untuk menjadi webprogramer.</p>
            </article>
        </div>

        <aside>
            <h2>Tentang Penulis</h2>
            <p>penulis masih belajar dibangku sekolah menengah pertama kelas (8 SMP). ini merupakan website pertama yang saya buat</p>
            <img src="assets/image/fotoku.jpg" alt="fotoku">
            <table>
                <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>M.ARAKA ROJUL HAMIDAN</td>
                </tr>

                <tr>
                    <td>Umur</td>
                    <td>:</td>
                    <td>14 TH</td>
                </tr>

                <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>Sumberpucung, Malang</td>
                </tr>
            </table>
        </aside>
    </main>

    <footer>
        made by raka &copy; 2022
    </footer>
    `;
}

const contact = function () {
    const content = document.getElementById("isiContent");
    content.innerHTML = `
    <header>

    <h1>Welcome to My Web</h1>
    <p>ini adalah website pertama saya.</p>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li>|</li>
            <li><a href="about.html">About</a></li>
            <li>|</li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    </header>

    <main>
        <div id="content">

            <article>
                <h2>My Addres</h2>
                <hr>
                <p>Jalan PURWOREJO RT.35 RW.05 KARANGKATES SUMBERPUCUNG MALANG</p>
            </article>

            <article>
                <h2>Email</h2>
                <hr>
                <p>marakarojulhamidan6@gmail.com</p>
            </article>
            
        </div>

        <aside>
            <h2>Tentang Penulis</h2>
            <p>penulis masih belajar dibangku sekolah menengah pertama kelas (8 SMP). ini merupakan website pertama yang saya buat</p>
            <img src="assets/image/fotoku.jpg" alt="fotoku">
            <table>
                <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>M.ARAKA ROJUL HAMIDAN</td>
                </tr>

                <tr>
                    <td>Umur</td>
                    <td>:</td>
                    <td>14 TH</td>
                </tr>

                <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>Sumberpucung, Malang</td>
                </tr>
            </table>
        </aside>
    </main>

    <footer>
        made by raka &copy; 2022
    </footer>
    `;
}