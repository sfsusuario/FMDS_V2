<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\SpiritualityArticle;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        Project::insert([
            [
                'titulo' => 'Proyecto para la Formación Franciscana',
                'descripcion' => '¿Cómo ser franciscano en la Colombia de hoy? La Provincia Franciscana San Pablo Apóstol lleva 40 años en Colombia y ha identificado la formación como elemento esencial de su misión.',
                'contenido' => 'La formación franciscana busca renovar el carisma de San Francisco de Asís en el contexto colombiano, adaptando sus valores de fraternidad, pobreza y paz a las realidades actuales del país.',
                'imagen' => null,
                'activo' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'titulo' => 'Proyecto Niñez Franciscana',
                'descripcion' => 'Niños y niñas en situación de vulnerabilidad que construyen proyectos de vida y se convierten en agentes de cambio en sus comunidades a través de la espiritualidad franciscana.',
                'contenido' => 'El proyecto trabaja con menores en situación de riesgo, brindándoles formación en valores franciscanos, educación complementaria y acompañamiento espiritual.',
                'imagen' => null,
                'activo' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'titulo' => 'Escuela de Música Paz y Bien',
                'descripcion' => 'Una orquesta en el Catatumbo liderada por hermanos franciscanos, trabajando con niños y jóvenes. "En el Catatumbo la música comienza a silenciar los fusiles."',
                'contenido' => 'La Escuela de Música Paz y Bien es una iniciativa orquestal que utiliza el arte como herramienta de paz y transformación social en una de las regiones más afectadas por el conflicto armado colombiano.',
                'imagen' => null,
                'activo' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'titulo' => 'Proyecto Hilando nuestros Sueños',
                'descripcion' => 'Alianza entre Fundación Mesa del Señor y Fundación Paz y Bien en Cali que enseña a niños y jóvenes la manufactura artesanal con hilo y textiles.',
                'contenido' => 'A través del tejido y las artesanías, este proyecto desarrolla habilidades manuales, fomenta la creatividad y genera ingresos para familias vulnerables en Cali.',
                'imagen' => null,
                'activo' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'titulo' => 'Proyecto Sembradores de Paz',
                'descripcion' => 'Trabaja con campesinos del Catatumbo buscando alternativas para promover la paz en sus territorios, enraizado en la parábola del sembrador.',
                'contenido' => 'Sembradores de Paz acompaña a comunidades campesinas en la búsqueda de alternativas productivas y de convivencia pacífica, inspirándose en la espiritualidad franciscana de cuidado de la creación.',
                'imagen' => null,
                'activo' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        SpiritualityArticle::insert([
            [
                'titulo' => 'La iglesia es mi casa',
                'slug' => 'la-iglesia-es-mi-casa',
                'extracto' => 'La palabra hogar tiene una etimología interesante: proviene del latín "focus", que hace referencia al fuego del hogar, centro de la vida familiar.',
                'contenido' => '<p>La palabra hogar tiene una etimología interesante: proviene del latín <em>focus</em>, que hace referencia al fuego del hogar, centro de la vida familiar y comunitaria.</p><p>San Francisco de Asís encontró en la Iglesia su verdadero hogar. No una institución fría, sino una comunidad viva donde el amor de Cristo se hace presente en cada hermano y hermana.</p><p>Hoy, como franciscanos, seguimos construyendo ese hogar que es la Iglesia: un lugar de acogida, de fraternidad y de esperanza para todos los que buscan a Dios.</p>',
                'imagen' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'titulo' => 'Mi pequeño Pesebre',
                'slug' => 'mi-pequeno-pesebre',
                'extracto' => 'El Papa escribió la hermosa carta "Admirabile signum" sobre el significado espiritual del pesebre como símbolo de la encarnación de Cristo.',
                'contenido' => '<p>El Papa Francisco escribió la hermosa carta <em>Admirabile signum</em> sobre el significado espiritual del pesebre, ese signo admirable que San Francisco de Asís instituyó en Greccio en 1223.</p><p>El pesebre nos recuerda que Dios eligió nacer en la pobreza, entre animales y pastores, para estar cerca de los más humildes.</p><p>En nuestras comunidades del Catatumbo y de Cali, cada pesebre que se arma es una profesión de fe: creemos en un Dios que se hace pequeño para levantarnos.</p>',
                'imagen' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'titulo' => 'Pidiendo alcanzar el don tan preciado de la paz',
                'slug' => 'pidiendo-alcanzar-la-paz',
                'extracto' => 'Una reflexión sobre la búsqueda de la paz como don del Espíritu, en medio de los desafíos que vive nuestra Colombia.',
                'contenido' => '<p>La paz no es simplemente la ausencia de guerra. Es un don del Espíritu Santo que hay que cultivar, pedir y construir cada día.</p><p>San Francisco lo entendió así cuando compuso su Cántico de las Criaturas, celebrando la armonía de toda la creación como reflejo de la paz de Dios.</p><p>En Colombia, pedir la paz es también comprometerse con ella: en las aulas, en los campos del Catatumbo, en los barrios de Cali y Medellín donde trabajamos.</p>',
                'imagen' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
